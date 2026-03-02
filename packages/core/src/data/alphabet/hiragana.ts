import { hiraganaBasic } from "./hiragana/basic";
import { hiraganaVoiced } from "./hiragana/voiced";
import { hiraganaSemiVoiced } from "./hiragana/semiVoiced";
import { hiraganaSmallKana } from "./hiragana/small";
import { hiraganaCompounds } from "./hiragana/compounds";

export const hiragana = [
  ...hiraganaBasic,
  ...hiraganaVoiced,
  ...hiraganaSemiVoiced,
  ...hiraganaSmallKana
];

export { hiraganaBasic, hiraganaVoiced, hiraganaSemiVoiced, hiraganaSmallKana, hiraganaCompounds };
