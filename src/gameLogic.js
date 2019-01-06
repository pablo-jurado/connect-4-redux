// an empty board is represented as an array of arrays
const emptyBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

function gameStatus (board) {
  // gameStatus should return null if it receives no arguments
  if (!validBoard(board)) return { status: null, position: null }

  if (checkColumnWinner(board) === 'r' ||
         checkRowWinner(board) === 'r' ||
      checkDiagonalWinner(board) === 'r') return { status: 'winner_red', position: mainCoordenites }

  if (checkColumnWinner(board) === 'y' ||
         checkRowWinner(board) === 'y' ||
      checkDiagonalWinner(board) === 'y') return { status: 'winner_yellow', position: mainCoordenites }

  if (isBoardFull(board)) return { status: 'tie', position: null }

  return { status: 'in_progress', position: null }
}

function isBoardFull (board) {
  // flat board nested array
  let flattened = board.reduce(function (a, b) {
    return a.concat(b)
  })

  // save total number ot circles need it for a full board
  let fullBoardLenght = flattened.length

  // filter empty items
  let filteredFlatBoard = flattened.filter(function (item) { return item != null })

  if (fullBoardLenght === filteredFlatBoard.length) return true
  return false
}

let mainCoordenites = []

function checkColumnWinner (board) {
  // check colum is from left to right because the array is flip
  for (let c = 0; c < board.length; c++) {
    for (let r = 0; r <= 4; r++) {
      if (board[c][r]) {
        if (board[c][r] === board[c][r + 1] &&
            board[c][r] === board[c][r + 2] &&
            board[c][r] === board[c][r + 3]) {
          mainCoordenites = [ [c, r], [c, r + 1], [c, r + 2], [c, r + 3] ]
          return board[c][r]
        }
      }
    }
  }
  return null
}

function checkRowWinner (board) {
  // should return null || 'r' || 'y'
  for (let c = 0; c <= 3; c++) {
    for (let r = 0; r < 6; r++) {
      if (board[c][r]) {
        if (board[c][r] === board[c + 1][r] &&
            board[c][r] === board[c + 2][r] &&
            board[c][r] === board[c + 3][r]) {
          mainCoordenites = [ [c, r], [c + 1, r], [c + 2, r], [c + 3, r] ]
          return board[c][r]
        }
      }
    }
  }
  return null
}

function checkDiagonalWinner (board) {
  // left to right check
  for (let c = 0; c <= 3; c++) {
    for (let r = 0; r <= 2; r++) {
      if (board[c][r]) {
        if (board[c][r] === board[c + 1][r + 1] &&
          board[c][r] === board[c + 2][r + 2] &&
          board[c][r] === board[c + 3][r + 3]) {
          mainCoordenites = [ [c, r], [c + 1, r + 1], [c + 2, r + 2], [c + 3, r + 3] ]
          return board[c][r]
        }
      }
    }
  }
  // diagonal right to left
  for (let c = 0; c <= 3; c++) {
    for (let r = 3; r <= 5; r++) {
      if (board[c][r]) {
        if (board[c][r] === board[c + 1][r - 1] &&
          board[c][r] === board[c + 2][r - 2] &&
          board[c][r] === board[c + 3][r - 3]) {
          mainCoordenites = [ [c, r], [c + 1, r - 1], [c + 2, r - 2], [c + 3, r - 3] ]
          return board[c][r]
        }
      }
    }
  }
  return null
}

function validBoard (board) {
  // checks if is not an Array or undefined
  if (!board) return false

  if (board.constructor === Array) {
    // checks for row/pices lenght
    if (board.length === 7 && board[0].length === 6 && board[1].length === 6 &&
                              board[2].length === 6 && board[3].length === 6 &&
                              board[4].length === 6 && board[5].length === 6) {
      return true
    }
  }
  return false
}

module.exports = {
  EMPTY_BOARD: emptyBoard,
  gameStatus: gameStatus,
  validBoard: validBoard
}