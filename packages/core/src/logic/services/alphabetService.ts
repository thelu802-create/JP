import {
  hiragana,
  hiraganaBasic,
  hiraganaCompounds,
  hiraganaSemiVoiced,
  hiraganaSmallKana,
  hiraganaVoiced,
  katakana,
  katakanaBasic,
  katakanaCompounds,
  katakanaSemiVoiced,
  katakanaSmallKana,
  katakanaVoiced
} from "../../data/alphabet";
import type { AlphabetGroup, CompoundKanaItem, KanaItem, KanaSection } from "../../models/types";
import { speakJapanese } from "../utils/speakJapanese";

const sectionsOrder: KanaSection[] = ["basic", "voiced", "semiVoiced", "small"];

const sectionMap: Record<AlphabetGroup, Record<KanaSection, KanaItem[]>> = {
  hiragana: {
    basic: hiraganaBasic,
    voiced: hiraganaVoiced,
    semiVoiced: hiraganaSemiVoiced,
    small: hiraganaSmallKana
  },
  katakana: {
    basic: katakanaBasic,
    voiced: katakanaVoiced,
    semiVoiced: katakanaSemiVoiced,
    small: katakanaSmallKana
  }
};

const allMap: Record<AlphabetGroup, KanaItem[]> = {
  hiragana,
  katakana
};

const compoundsMap: Record<AlphabetGroup, CompoundKanaItem[]> = {
  hiragana: hiraganaCompounds,
  katakana: katakanaCompounds
};

const quizRows = ["a", "ka", "sa", "ta", "na", "ha", "ma", "ya", "ra", "wa"];

export const alphabetService = {
  list(group: AlphabetGroup): KanaItem[] {
    return allMap[group];
  },

  listBySection(group: AlphabetGroup, section: KanaSection): KanaItem[] {
    return sectionMap[group][section];
  },

  listCompounds(group: AlphabetGroup): CompoundKanaItem[] {
    return compoundsMap[group];
  },

  sections(): KanaSection[] {
    return sectionsOrder;
  },

  quizRows(): string[] {
    return quizRows;
  },

  quizPool(group: AlphabetGroup, row: string): KanaItem[] {
    return allMap[group].filter((item) => item.row === row);
  },

  speak(text: string): void {
    speakJapanese(text, 0.85);
  }
};
