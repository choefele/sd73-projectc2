import { describe, expect, it } from "vitest";
import { main } from "../src/main.js";

describe("main", () => {
  it("accepts no args", () => {
    const result = main([]);
    expect(result.exitCode).toBe(0);
    expect(result.output).toBe("");
  });

  it("accepts the rps subcommand", () => {
    const result = main(["rps", "Rock"]);
    expect(result.exitCode).toBe(0);
    expect(result.output).toBe("");
  });
});
