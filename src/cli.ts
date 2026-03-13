#!/usr/bin/env node

import { main } from "./main.js";

const result = main(process.argv.slice(2));
if (result.output.length > 0) {
  process.stdout.write(`${result.output}\n`);
}
process.exit(result.exitCode);
