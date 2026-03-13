import { describe, expect, it } from "vitest";
import { generateMove, play, Move } from "../src/rock-paper-scissors.js";

describe("generateMove", () => {
  it("generates random move", () => {
    const move = generateMove();
    expect(move).toBeOneOf([Move.Rock, Move.Paper, Move.Scissors]);
  });
});

describe("play", () => {
  it("rock beats scissors", () => {
    expect(play(Move.Rock, Move.Scissors)).toBeTruthy();
  });
  it("rock loses to paper", () => {
    expect(play(Move.Rock, Move.Paper)).toBeFalsy();
  });

  it("paper loses to scissors", () => {
    expect(play(Move.Paper, Move.Scissors)).toBeFalsy();
  });
  it("paper beats rock", () => {
    expect(play(Move.Paper, Move.Rock)).toBeTruthy();
  });

  it("scissors loses to rock", () => {
    expect(play(Move.Scissors, Move.Rock)).toBeFalsy();
  });
  it("scissors beats paper", () => {
    expect(play(Move.Scissors, Move.Paper)).toBeTruthy();
  });

  it("moves must be different", () => {
    expect(play(Move.Rock, Move.Rock)).toBeUndefined();
    expect(play(Move.Scissors, Move.Scissors)).toBeUndefined();
    expect(play(Move.Paper, Move.Paper)).toBeUndefined();
  });
});
