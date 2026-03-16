import { describe, expect, it } from "vitest";
import { exportedForTesting } from "../src/pig-latin.js";

describe("translate helpers", () => {
  it("translates consonant/vowel", () => {
    const input = ["Happy", "pig", "latin", "banana", "l", ""];
    const expectedOutput = [
      "Appyhay",
      "igpay",
      "atinlay",
      "ananabay",
      "lay",
      "",
    ];

    input.forEach((s, i) => {
      const translated = exportedForTesting.translateConsonantVowel(s);
      expect(translated).toBe(expectedOutput[i]);
    });
  });
});
