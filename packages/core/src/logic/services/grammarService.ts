import { allGrammarPoints, grammarCatalog } from "../../data/grammar";
import type { GrammarCategory, GrammarLevel, GrammarPoint } from "../../models/types";

const levelOrder: GrammarLevel[] = ["N5", "N4", "N3", "N2", "N1"];

const categoryOrder: GrammarCategory[] = [
  "co-ban",
  "tro-tu",
  "dong-tu",
  "thoi-gian",
  "dieu-kien",
  "y-dinh",
  "ly-do",
  "ke-hoach",
  "trang-trong",
  "nang-cao"
];

export const grammarService = {
  list(): GrammarPoint[] {
    return allGrammarPoints;
  },

  levels(): GrammarLevel[] {
    return levelOrder;
  },

  categories(): GrammarCategory[] {
    return categoryOrder;
  },

  listByLevel(level: GrammarLevel): GrammarPoint[] {
    return grammarCatalog[level];
  },

  filter(level: GrammarLevel | "all", category: GrammarCategory | "all"): GrammarPoint[] {
    return allGrammarPoints.filter((point) => {
      const matchLevel = level === "all" || point.level === level;
      const matchCategory = category === "all" || point.category === category;
      return matchLevel && matchCategory;
    });
  }
};
