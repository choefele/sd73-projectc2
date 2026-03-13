import { Move } from "./rock-paper-scissors.js";
import { MainOutput } from "./main.js";

const map = new Map([
  ["rock", Move.Rock],
  ["paper", Move.Paper],
  ["scissors", Move.Scissors],
]);

export function rps(moveInput: string): MainOutput {
  const playerMove = map.get(moveInput.toLowerCase());
  //   if (!playerMove) {
  //     throw new
  //   }

  return { exitCode: 0, output: "exitcode" };
}
