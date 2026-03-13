import { describe, expect, it } from "vitest";
import { generateMove, play, Move } from "../src/rock-paper-scissors.js";

describe("generateMove", () => {
  it("generates random move", () => {
    const move = generateMove();
    expect(move).toBeOneOf([Move.Rock, Move.Paper, Move.Scissors]);
  });
});
