import { describe, expect, it } from "vitest";
import { main } from "../src/main.js";

describe("main", () => {
  it("greets world by default", () => {
    const result = main([]);
    expect(result.exitCode).toBe(0);
    expect(result.output).toBe("Hello, world!");
  });

  it("greets a provided name", () => {
    const result = main(["Ada"]);
    expect(result.output).toBe("Hello, Ada!");
  });
});
