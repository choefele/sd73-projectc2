#!/usr/bin/env node
import { Command } from "commander";

export function main(args: string[]): {
  exitCode: number;
  output: string;
} {
  const program = new Command();
  let output = "";

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
    .command("rps <move>")
    .description("Play rock-paper-scissors against the computer");

  try {
    program.parse(args, { from: "user" });
    return { exitCode: 0, output: output.trimEnd() };
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

const result = main(process.argv.slice(2));
if (result.output.length > 0) {
  process.stdout.write(`${result.output}\n`);
}
process.exit(result.exitCode);
