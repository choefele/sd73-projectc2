import { describe, expect, it } from "vitest";
import { exportedForTesting } from "../src/pig-latin.js";

describe("translate helpers", () => {
  it("capitalizes word", () => {
    expect(exportedForTesting.capitalize("Happy", "test")).toBe("Test");
    expect(exportedForTesting.capitalize("happy", "test")).toBe("test");
    expect(exportedForTesting.capitalize("L", "T")).toBe("T");
    expect(exportedForTesting.capitalize("t", "l")).toBe("l");
    expect(exportedForTesting.capitalize("t", "")).toBe("");
  });

  it("translates consonant/vowel", () => {
    const input = ["Happy", "pig", "latin", "banana", "l", ""];
    const expectedOutput = [
      "appyhay",
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

  it("translates two consonants", () => {
    const input = ["Child", "black", "ll", "l", ""];
    const expectedOutput = ["ildchay", "ackblay", "llay", "", ""];

    input.forEach((s, i) => {
      const translated = exportedForTesting.translateTwoConsonants(s);
      expect(translated).toBe(expectedOutput[i]);
    });
  });
});
