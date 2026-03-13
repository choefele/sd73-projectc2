import { Move, Outcome, generateMove, play } from "./rock-paper-scissors.js";
import { MainOutput } from "./main.js";

const map = new Map([
  ["rock", Move.Rock],
  ["paper", Move.Paper],
  ["scissors", Move.Scissors],
]);

export function rps(moveInput: string): MainOutput {
  const playerMove = map.get(moveInput.toLowerCase());
  if (playerMove === undefined) {
    throw new Error("Invalid player move");
  }
  const computerMove = generateMove();
  const result = play(playerMove, computerMove);

  let output = "";
  output += `Player move: ${Move[playerMove]}\n`;
  output += `Computer move: ${Move[computerMove]}\n`;
  if (result === Outcome.Win) {
    output += `${Move[playerMove]} beats ${Move[computerMove]} – Player wins\n`;
  } else if (result === Outcome.Lose) {
    output += `${Move[playerMove]} loses to ${Move[computerMove]} – Computer wins\n`;
  } else {
    output += "Same move – it's a tie\n";
  }

  return { exitCode: 0, output };
}
