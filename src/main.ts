import { Command } from "commander";
import { rps } from "./main-rps.js";
import { pl } from "./main-pl.js";

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
    .action((move) => {
      ({ exitCode, output } = rps(move));
    });

  program
    .command("pl")
    .description("Translate English to Pig Latin")
    .argument("text", "text to translate")
    .action((text) => {
      ({ exitCode, output } = pl(text));
    });

  try {
    program.parse(args, { from: "user" });
    return { exitCode, output: output.trimEnd() };
  } catch (error) {
    const errObj = error as { exitCode?: unknown; code?: unknown };
    const isHelp =
      typeof errObj === "object" &&
      errObj !== null &&
      errObj.code === "commander.helpDisplayed";

    exitCode =
      typeof errObj === "object" &&
      errObj !== null &&
      typeof errObj.exitCode === "number"
        ? errObj.exitCode
        : 1;

    if (isHelp) {
      return { exitCode: 0, output: output.trimEnd() };
    }

    const trimmedOutput = output.trimEnd();
    output = trimmedOutput.length > 0 ? trimmedOutput : `${error}`;

    return { exitCode, output };
  }
}
