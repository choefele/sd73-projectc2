function capitalize(template: string, s: string): string {
  const startsWithUppercase = template[0] === template[0]?.toUpperCase();
  const capitalized = startsWithUppercase
    ? s[0]?.toUpperCase() + s.slice(1)
    : s;

  return capitalized;
}

function translateConsonantVowel(s: string): string {
  if (s.length === 0) return "";

  const input = s.trim().toLowerCase();
  const letter = input.slice(0, 1);
  return input.slice(1).concat(letter).concat("ay");
}

function translateTwoConsonants(s: string): string {
  if (s.length < 2) return "";

  const input = s.trim().toLowerCase();
  const letter = input.slice(0, 2);
  return input.slice(2).concat(letter).concat("ay");
}

function translateVowel(s: string): string {
  if (s.length === 0) return "";

  const input = s.trim().toLowerCase();
  return input.concat("way");
}

export function translate(s: string): string {
  return "";
}

export const exportedForTesting = {
  capitalize,
  translateConsonantVowel,
  translateTwoConsonants,
  translateVowel,
};
