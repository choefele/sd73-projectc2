import { Command } from "commander";
import { rps } from "./main-rps.js";

export type MainOutput = {
  exitCode: number;
  output: string;
};

export function main(args: string[]): MainOutput {
  const program = new Command();
  let output = "";
  let exitCode = 0;

  program
    .name("projectc2")
    .description("Project C2 CLI")
    .exitOverride()
    .configureOutput({
      writeOut: (str) => {
        output += str;
      },
      writeErr: (str) => {
        output += str;
      },
    });

  program
    .command("rps")
    .description("Play rock-paper-scissors against the computer")
    .argument("move", "game move (rock, paper, scissors)")
    .action((moveInput) => {
      ({ exitCode, output } = rps(moveInput));
    });

  try {
    program.parse(args, { from: "user" });
    return { exitCode, output: output.trimEnd() };
  } catch (error) {
    const exitCode =
      typeof error === "object" &&
      error !== null &&
      "exitCode" in error &&
      typeof (error as { exitCode?: unknown }).exitCode === "number"
        ? (error as { exitCode: number }).exitCode
        : 1;

    return { exitCode, output: output.trimEnd() };
  }
}
