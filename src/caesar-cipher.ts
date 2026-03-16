export function encrypt(s: string, shift: number): string {
  const shiftNormalized = ((shift % 26) + 26) % 26;
  return s.replace(/[a-z]/gi, (ch) => {
    const base = ch >= "a" && ch <= "z" ? 97 : 65;
    const code = ch.charCodeAt(0) - base;
    return String.fromCharCode(((code + shiftNormalized) % 26) + base);
  });
}
