export type AlphabetGroup = "hiragana" | "katakana";
export type KanaSection = "basic" | "voiced" | "semiVoiced" | "small";

export interface KanaItem {
  id: string;
  kana: string;
  romaji: string;
  group: AlphabetGroup;
  row: string;
  section: KanaSection;
}

export interface CompoundKanaItem {
  id: string;
  kana: string;
  romaji: string;
  group: AlphabetGroup;
  baseRow: string;
}

export type GrammarLevel = "N5" | "N4" | "N3" | "N2" | "N1";
export type GrammarCategory =
  | "co-ban"
  | "tro-tu"
  | "dong-tu"
  | "thoi-gian"
  | "dieu-kien"
  | "y-dinh"
  | "ly-do"
  | "ke-hoach"
  | "trang-trong"
  | "nang-cao";

export interface GrammarPoint {
  id: string;
  level: GrammarLevel;
  category: GrammarCategory;
  title: string;
  pattern: string;
  meaningVi: string;
  explanation: string;
  tags?: string[];
  notes: string[];
  examples: Array<{
    jp: string;
    vi: string;
  }>;
}

export interface VocabularyItem {
  id: string;
  lesson: number;
  japanese: string;
  kana: string;
  meaningVi: string;
  wordType: string;
  example: {
    jp: string;
    vi: string;
  };
}

export interface VocabularyLesson {
  lesson: number;
  title: string;
  source: string;
  items: VocabularyItem[];
}

export type TimeVocabularyTab = "day" | "month" | "year" | "hour" | "minute" | "second";

export interface TimeVocabularyGroup {
  key: TimeVocabularyTab;
  label: string;
  items: VocabularyItem[];
}

export interface ListeningCard {
  id: string;
  topic: ListeningTopic;
  japanese: string;
  meaningVi: string;
  hint: string;
  optionsVi: string[];
}

export type ListeningTopic = "greeting" | "self-intro" | "daily" | "shopping" | "travel";

export interface ListeningTopicOption {
  key: ListeningTopic;
  label: string;
}
