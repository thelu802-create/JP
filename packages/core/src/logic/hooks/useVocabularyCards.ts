import { useMemo } from "react";
import { vocabularyService } from "../services/vocabularyService";
import { useVocabularyDeck } from "./useVocabularyDeck";

export function useVocabularyCards(lesson: number) {
  const cards = useMemo(() => vocabularyService.listByLesson(lesson), [lesson]);
  return useVocabularyDeck(cards);
}
