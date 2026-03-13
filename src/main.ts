export type MainResult = {
  exitCode: number;
  output: string;
};

export function main(args: string[]): MainResult {
  const name = args[0] ?? "world";
  return {
    exitCode: 0,
    output: `Hello, ${name}!`
  };
}
