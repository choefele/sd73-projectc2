import { describe, expect, it } from "vitest";
import { main } from "../src/main.js";

describe("main", () => {
  it("accepts the rps subcommand", () => {
    const result = main(["rps", "Rock"]);
    expect(result.exitCode).toBe(0);
  });

  it("accepts the pl subcommand", () => {
    const result = main(["pl", "Test a ba c"]);
    expect(result.exitCode).toBe(0);
  });

  it("accepts the cc subcommand", () => {
    const result = main(["cc", "Test a ba c", "3"]);
    expect(result.exitCode).toBe(0);
  });

  it("returns help output with exit code 0", () => {
    const result = main(["--help"]);
    expect(result.exitCode).toBe(0);
    expect(result.output).toContain("rps");
    expect(result.output).toContain("pl");
    expect(result.output).toContain("cc");
  });
});
