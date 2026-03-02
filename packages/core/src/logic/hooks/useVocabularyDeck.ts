import { useEffect, useState } from "react";
import type { VocabularyItem } from "../../models/types";

export function useVocabularyDeck(items: VocabularyItem[]) {
  const [index, setIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  useEffect(() => {
    setIndex(0);
    setShowMeaning(false);
  }, [items]);

  const current = items[index];

  const next = () => {
    if (items.length === 0) return;
    setShowMeaning(false);
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    if (items.length === 0) return;
    setShowMeaning(false);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const reset = () => {
    setShowMeaning(false);
    setIndex(0);
  };

  return {
    cards: items,
    current,
    index,
    showMeaning,
    setShowMeaning,
    next,
    prev,
    reset
  };
}
