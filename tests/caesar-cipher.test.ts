import { describe, expect, it } from "vitest";
import { encrypt } from "../src/caesar-cipher.js";

describe("translate helpers", () => {
  it("encyrpts text", () => {
    expect(encrypt("hello world", 3)).toBe("khoor zruog");
    expect(encrypt("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", -3)).toBe(
      "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD",
    );
    expect(encrypt("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", 23)).toBe(
      "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD",
    );
  });
});
