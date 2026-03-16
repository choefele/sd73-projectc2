import { translate } from "./pig-latin.js";
import { MainOutput } from "./main.js";

export function pl(text: string): MainOutput {
  let output = "";

  output += `Input: ${text}\n`;
  output += `Translation: ${translate(text)}\n`;

  return { exitCode: 0, output };
}
