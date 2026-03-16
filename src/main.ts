import { Command, CommanderError } from "commander";
import { rps } from "./main-rps.js";
import { pl } from "./main-pl.js";
import { cc } from "./main-cc.js";

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
    .description("play rock-paper-scissors against the computer")
    .argument("move", "game move (rock, paper, scissors)")
    .action((move) => {
      ({ exitCode, output } = rps(move));
    });

  program
    .command("pl")
    .description("translate English to Pig Latin")
    .argument("text", "text to translate")
    .action((text) => {
      ({ exitCode, output } = pl(text));
    });

  program
    .command("cc")
    .description("encrypt using Caesar Cipher")
    .argument("text", "text to encyrpt")
    .argument("shift", "amount to shift left or right")
    .action((text, shift) => {
      ({ exitCode, output } = cc(text, shift));
    });

  try {
    program.parse(args, { from: "user" });
    return { exitCode, output: output.trimEnd() };
  } catch (error) {
    if (
      error instanceof CommanderError &&
      error.code === "commander.helpDisplayed"
    ) {
      return { exitCode: 0, output: output.trimEnd() };
    }

    exitCode = error instanceof CommanderError ? error.exitCode : 1;
    const trimmedOutput = output.trimEnd();
    output = trimmedOutput.length > 0 ? trimmedOutput : `${error}`;

    return { exitCode, output };
  }
}
