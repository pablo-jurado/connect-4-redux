export function createEmptyBoard() {
  let board = [];
  for (let i = 0; i < 7; i++) {
    let col = [];
    for (let j = 0; j < 6; j++) {
      col.push(null);
    }
    board.push(col);
  }
  return board;
}

export function switchTurn(turn) {
  return turn === "r" ? "y" : "r";
}

export function isRowAvailable(row) {
  if (row.indexOf(null) !== -1) return true;
  return false;
}

export function addPieceToRow(row, player) {
  let i = row.length - 1;
  for (i; i >= 0; i--) {
    if (row[i] === null) {
      row[i] = player;
      break;
    }
  }
  return row;
}
