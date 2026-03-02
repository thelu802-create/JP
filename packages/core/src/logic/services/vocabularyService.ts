import { minnaShokyu1Lessons, minnaShokyu1Vocabulary, timeVocabularyGroups } from "../../data/vocabulary";
import type { TimeVocabularyGroup, TimeVocabularyTab, VocabularyItem, VocabularyLesson } from "../../models/types";
import { speakJapanese } from "../utils/speakJapanese";

export const vocabularyService = {
  listLessons(): VocabularyLesson[] {
    return minnaShokyu1Lessons;
  },

  lessonNumbers(): number[] {
    return minnaShokyu1Lessons.map((lesson) => lesson.lesson);
  },

  listAll(): VocabularyItem[] {
    return minnaShokyu1Vocabulary;
  },

  listByLesson(lesson: number): VocabularyItem[] {
    const matched = minnaShokyu1Lessons.find((item) => item.lesson === lesson);
    return matched ? matched.items : [];
  },

  listTimeGroups(): TimeVocabularyGroup[] {
    return timeVocabularyGroups;
  },

  listByTimeTab(tab: TimeVocabularyTab): VocabularyItem[] {
    const group = timeVocabularyGroups.find((item) => item.key === tab);
    return group ? group.items : [];
  },

  speak(text: string): void {
    speakJapanese(text, 0.9);
  }
};
