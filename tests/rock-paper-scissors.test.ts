import { describe, expect, it } from "vitest";
import {
  generateMove,
  play,
  Move,
  Outcome,
} from "../src/rock-paper-scissors.js";

describe("generateMove", () => {
  it("generates random move", () => {
    const move = generateMove();
    expect(move).toBeOneOf([Move.Rock, Move.Paper, Move.Scissors]);
  });
});

describe("play", () => {
  it("rock beats scissors", () => {
    expect(play(Move.Rock, Move.Scissors)).toBe(Outcome.Win);
  });
  it("rock loses to paper", () => {
    expect(play(Move.Rock, Move.Paper)).toBe(Outcome.Lose);
  });

  it("paper loses to scissors", () => {
    expect(play(Move.Paper, Move.Scissors)).toBe(Outcome.Lose);
  });
  it("paper beats rock", () => {
    expect(play(Move.Paper, Move.Rock)).toBe(Outcome.Win);
  });

  it("scissors loses to rock", () => {
    expect(play(Move.Scissors, Move.Rock)).toBe(Outcome.Lose);
  });
  it("scissors beats paper", () => {
    expect(play(Move.Scissors, Move.Paper)).toBe(Outcome.Win);
  });

  it("same move ends in a tie", () => {
    expect(play(Move.Rock, Move.Rock)).toBe(Outcome.Tie);
    expect(play(Move.Scissors, Move.Scissors)).toBe(Outcome.Tie);
    expect(play(Move.Paper, Move.Paper)).toBe(Outcome.Tie);
  });
});
