import { n5CoreGrammar } from "./n5/core";
import { n5IntentAdvancedGrammar } from "./n5/intentAdvanced";
import { n5ParticleGrammar } from "./n5/particles";
import { n5TimeConditionGrammar } from "./n5/timeCondition";
import { n5VerbGrammar } from "./n5/verbs/index";

export const n5Grammar = [
  ...n5CoreGrammar,
  ...n5ParticleGrammar,
  ...n5VerbGrammar,
  ...n5TimeConditionGrammar,
  ...n5IntentAdvancedGrammar
];

export {
  n5CoreGrammar,
  n5ParticleGrammar,
  n5VerbGrammar,
  n5TimeConditionGrammar,
  n5IntentAdvancedGrammar
};
