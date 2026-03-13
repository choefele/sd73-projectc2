enum Move {
  Rock,
  Paper,
  Scissors,
}

enum Outcome {
  Win,
  Lose,
  Tie,
}

function generateMove(): Move {
  const numberOfMoves = Object.keys(Move).length / 2;
  const index = Math.floor(Math.random() * numberOfMoves);
  return Move[Move[index] as keyof typeof Move];
}

function play(player1: Move, player2: Move): Outcome {
  if (player1 === Move.Rock) {
    if (player2 === Move.Scissors) return Outcome.Win;
    if (player2 === Move.Paper) return Outcome.Lose;
  } else if (player1 === Move.Paper) {
    if (player2 === Move.Rock) return Outcome.Win;
    if (player2 === Move.Scissors) return Outcome.Lose;
  } else {
    // Move.Scissors
    if (player2 === Move.Paper) return Outcome.Win;
    if (player2 === Move.Rock) return Outcome.Lose;
  }

  return Outcome.Tie;
}

export { generateMove, play, Move, Outcome };
