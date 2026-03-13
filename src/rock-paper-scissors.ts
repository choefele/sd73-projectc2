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

function play(player1: Move, player2: Move): boolean | undefined {
  if (player1 === Move.Rock) {
    if (player2 === Move.Scissors) return true;
    if (player2 === Move.Paper) return false;
  } else if (player1 === Move.Paper) {
    if (player2 === Move.Rock) return true;
    if (player2 === Move.Scissors) return false;
  } else {
    // Move.Scissors
    if (player2 === Move.Paper) return true;
    if (player2 === Move.Rock) return false;
  }

  return undefined;
}

export { generateMove, play, Move };
