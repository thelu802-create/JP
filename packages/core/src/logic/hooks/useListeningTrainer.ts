import { useMemo, useState } from "react";
import type { ListeningCard } from "../../models/types";
import { listeningService } from "../services/listeningService";
import { useQuizProgress } from "./useQuizProgress";

export function useListeningTrainer(deck: ListeningCard[]) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string>();

  const current = deck[index];
  const options = useMemo(() => listeningService.getOptions(current), [current.id]);
  const quiz = useQuizProgress(deck.length);

  const check = () => {
    if (!selected) return null;

    const isCorrect = selected === current.meaningVi;
    quiz.register(isCorrect);
    return isCorrect;
  };

  const next = () => {
    setSelected(undefined);
    setIndex((prev) => (prev + 1) % deck.length);
  };

  const reset = () => {
    setSelected(undefined);
    setIndex(0);
    quiz.reset();
  };

  return {
    current,
    selected,
    setSelected,
    options,
    scoreText: quiz.scoreText,
    check,
    next,
    reset
  };
}
