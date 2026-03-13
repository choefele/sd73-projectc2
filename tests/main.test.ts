import { describe, expect, it } from "vitest";
import { main } from "../src/main.js";

describe("main", () => {
  it("accepts the rps subcommand", () => {
    const result = main(["rps", "Rock"]);
    expect(result.exitCode).toBe(0);
  });
});
