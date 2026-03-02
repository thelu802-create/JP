import { useMemo, useState } from "react";

interface QuizResult {
  answered: number;
  correct: number;
}

export function useQuizProgress(total: number) {
  const [result, setResult] = useState<QuizResult>({ answered: 0, correct: 0 });

  const scoreText = useMemo(() => {
    if (result.answered === 0) return "Chưa có lượt làm";
    return `${result.correct}/${result.answered} đúng`;
  }, [result]);

  const register = (isCorrect: boolean) => {
    setResult((prev) => ({
      answered: Math.min(prev.answered + 1, total),
      correct: prev.correct + (isCorrect ? 1 : 0)
    }));
  };

  const reset = () => setResult({ answered: 0, correct: 0 });

  return { result, scoreText, register, reset };
}
