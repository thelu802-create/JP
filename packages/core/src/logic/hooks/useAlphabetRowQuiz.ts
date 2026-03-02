import { useEffect, useMemo, useState } from "react";
import type { AlphabetGroup, KanaItem } from "../../models/types";
import { alphabetService } from "../services/alphabetService";
import { shuffle } from "../utils/shuffle";

interface QuizStats {
  answered: number;
  correct: number;
}

export function useAlphabetRowQuiz(group: AlphabetGroup, row: string) {
  const pool = useMemo(() => alphabetService.quizPool(group, row), [group, row]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string>();
  const [stats, setStats] = useState<QuizStats>({ answered: 0, correct: 0 });

  useEffect(() => {
    setIndex(0);
    setSelected(undefined);
    setStats({ answered: 0, correct: 0 });
  }, [group, row]);

  const current = pool[index] as KanaItem | undefined;

  const options = useMemo(() => {
    if (!current) return [];

    const distractors = shuffle(pool.filter((item) => item.id !== current.id)).slice(0, 3);
    return shuffle([current, ...distractors]).map((item) => item.kana);
  }, [current, pool]);

  const check = () => {
    if (!current || !selected) return null;

    const isCorrect = selected === current.kana;
    setStats((prev) => ({
      answered: prev.answered + 1,
      correct: prev.correct + (isCorrect ? 1 : 0)
    }));

    return isCorrect;
  };

  const next = () => {
    if (pool.length === 0) return;
    setSelected(undefined);
    setIndex((prev) => (prev + 1) % pool.length);
  };

  const reset = () => {
    setSelected(undefined);
    setIndex(0);
    setStats({ answered: 0, correct: 0 });
  };

  const scoreText = stats.answered === 0 ? "Chưa làm" : `${stats.correct}/${stats.answered} đúng`;

  return {
    current,
    options,
    selected,
    setSelected,
    scoreText,
    check,
    next,
    reset,
    empty: pool.length === 0
  };
}
