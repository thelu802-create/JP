import { n5VerbActionGrammar } from "./action";
import { n5VerbNegativeGrammar } from "./negative";
import { n5VerbPastGrammar } from "./past";
import { n5VerbPresentFutureGrammar } from "./presentFuture";

export const n5VerbGrammar = [
  ...n5VerbPresentFutureGrammar,
  ...n5VerbPastGrammar,
  ...n5VerbNegativeGrammar,
  ...n5VerbActionGrammar
];

export { n5VerbPresentFutureGrammar, n5VerbPastGrammar, n5VerbNegativeGrammar, n5VerbActionGrammar };
