function translateConsonantVowel(s: string): string {
  if (s.length === 0) return "";

  const input = s.trim().toLowerCase();
  const letter = input.slice(0, 1);
  const translated = input.slice(1).concat(letter).concat("ay");

  const startsWithUppercase = s[0] === s[0]?.toUpperCase();
  const capitalized = startsWithUppercase
    ? translated[0]?.toUpperCase() + translated.slice(1)
    : translated;

  return capitalized;
}

function translateTwoConsonants(s: string): string {
  return "";
}

function translateVowel(s: string): string {
  return "";
}

export function translate(s: string): string {
  return "";
}

export const exportedForTesting = {
  translateConsonantVowel,
  translateTwoConsonants,
  translateVowel,
};
