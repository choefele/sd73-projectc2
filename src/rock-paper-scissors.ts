enum Move {
  Rock,
  Paper,
  Scissors,
}

function generateMove(): Move {
  const numberOfMoves = Object.keys(Move).length / 2;
  const index = Math.floor(Math.random() * numberOfMoves);
  return Move[Move[index] as keyof typeof Move];
}

function play(player1: Move, player2: Move): boolean {
  return false;
}

export { generateMove, play, Move };
