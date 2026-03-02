import { n1Grammar } from "./n1";
import { n2Grammar } from "./n2";
import { n3Grammar } from "./n3";
import { n4Grammar } from "./n4";
import { n5Grammar } from "./n5";

export const grammarCatalog = {
  N5: n5Grammar,
  N4: n4Grammar,
  N3: n3Grammar,
  N2: n2Grammar,
  N1: n1Grammar
} as const;

export const allGrammarPoints = [
  ...n5Grammar,
  ...n4Grammar,
  ...n3Grammar,
  ...n2Grammar,
  ...n1Grammar
];

export { n5Grammar, n4Grammar, n3Grammar, n2Grammar, n1Grammar };
