import { encrypt } from "./caesar-cipher.js";
import { MainOutput } from "./main.js";

export function cc(text: string, shift: string): MainOutput {
  const shiftAsNumber = Number.parseInt(shift) ?? 0;

  let output = "";
  output += `Input: ${text}\n`;
  output += `Caesar Cipher: ${encrypt(text, shiftAsNumber)}\n`;

  return { exitCode: 0, output };
}
