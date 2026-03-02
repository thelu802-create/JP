import { katakanaBasic } from "./katakana/basic";
import { katakanaVoiced } from "./katakana/voiced";
import { katakanaSemiVoiced } from "./katakana/semiVoiced";
import { katakanaSmallKana } from "./katakana/small";
import { katakanaCompounds } from "./katakana/compounds";

export const katakana = [
  ...katakanaBasic,
  ...katakanaVoiced,
  ...katakanaSemiVoiced,
  ...katakanaSmallKana
];

export { katakanaBasic, katakanaVoiced, katakanaSemiVoiced, katakanaSmallKana, katakanaCompounds };
