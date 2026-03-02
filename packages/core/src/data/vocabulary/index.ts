import { minnaShokyu1Lesson01 } from "./minnaShokyu1/lesson01";
import { minnaShokyu1Lesson02 } from "./minnaShokyu1/lesson02";
import { minnaShokyu1Lesson03 } from "./minnaShokyu1/lesson03";
import { minnaShokyu1Lesson04 } from "./minnaShokyu1/lesson04";
import { minnaShokyu1Lesson05 } from "./minnaShokyu1/lesson05";
import { minnaShokyu1Lesson06 } from "./minnaShokyu1/lesson06";
import { minnaShokyu1Lesson07 } from "./minnaShokyu1/lesson07";
import { minnaShokyu1Lesson08 } from "./minnaShokyu1/lesson08";
import { minnaShokyu1Lesson09 } from "./minnaShokyu1/lesson09";
import { minnaShokyu1Lesson10 } from "./minnaShokyu1/lesson10";
import { timeVocabularyGroups } from "./timeUnits";

export const minnaShokyu1Lessons = [
  minnaShokyu1Lesson01,
  minnaShokyu1Lesson02,
  minnaShokyu1Lesson03,
  minnaShokyu1Lesson04,
  minnaShokyu1Lesson05,
  minnaShokyu1Lesson06,
  minnaShokyu1Lesson07,
  minnaShokyu1Lesson08,
  minnaShokyu1Lesson09,
  minnaShokyu1Lesson10
];

export const minnaShokyu1Vocabulary = minnaShokyu1Lessons.flatMap((lesson) => lesson.items);

export { timeVocabularyGroups };
