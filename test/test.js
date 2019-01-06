/* global describe it */

const assert = require("assert");
const connect4Lib = require("../src/gameLogic.js");

// -----------------------------------------------------------------------------
// Test Boards
// -----------------------------------------------------------------------------

const notQuiteAFullBoard = [
  ["y", "r", "y", "r", "y"],
  ["r", "y", "r", "y", "r", "y"],
  ["y", "r", "y", "r", "y", "r"],
  ["y", "r", "y", "r", "y", "r"],
  ["y", "r", "y", "r", "y", "r"],
  ["r", "y", "r", "y", "r", "y"],
  ["y", "r", "y", "r", "y", "r"]
];

const missingAColumn = [
  ["y", "r", "y", "r", "y", "r"],
  ["r", "y", "r", "y", "r", "y"],
  ["y", "r", "y", "r", "y", "r"],
  ["y", "r", "y", "r", "y", "r"],
  ["y", "r", "y", "r", "y", "r"],
  ["r", "y", "r", "y", "r", "y"]
];

const tieBoard1 = [
  ["y", "r", "y", "r", "y", "r"],
  ["r", "y", "r", "y", "r", "y"],
  ["y", "r", "y", "r", "y", "r"],
  ["y", "r", "y", "r", "y", "r"],
  ["y", "r", "y", "r", "y", "r"],
  ["r", "y", "r", "y", "r", "y"],
  ["y", "r", "y", "r", "y", "r"]
];

const redRowWin1 = [
  ["r", "y", null, null, null, null],
  ["r", "y", null, null, null, null],
  ["r", "y", null, null, null, null],
  ["r", null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
];

const redColWin1 = [
  ["r", "r", "r", "r", null, null],
  ["y", "y", "y", null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
];

const bigBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
];

const moreThan6pieces = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
];

// -----------------------------------------------------------------------------
// Valid Board
// -----------------------------------------------------------------------------

function testValidBoard() {
  it("undefined is not a valid board", function() {
    assert.strictEqual(connect4Lib.validBoard(), false);
  });

  it("a string is not a valid board", function() {
    assert.strictEqual(connect4Lib.validBoard("banana"), false);
  });

  it("a number is not a valid board", function() {
    assert.strictEqual(connect4Lib.validBoard(8), false);
  });

  it("an object is not a valid board", function() {
    assert.strictEqual(connect4Lib.validBoard({}), false);
  });

  it("boards must be 7 columns, 6 deep - 1", function() {
    assert.strictEqual(connect4Lib.validBoard(notQuiteAFullBoard), false);
  });

  it("boards must be 7 columns, 6 deep - 2", function() {
    assert.strictEqual(connect4Lib.validBoard(connect4Lib.EMPTY_BOARD), true);
  });

  it("boards must be 7 columns, 6 deep - 3", function() {
    assert.strictEqual(connect4Lib.validBoard(tieBoard1), true);
  });

  it("boards must be 7 columns, 6 deep - 4", function() {
    assert.strictEqual(connect4Lib.validBoard(missingAColumn), false);
  });

  // TODO: add many more test cases here

  it("boards should not have more than 7 columns", function() {
    assert.strictEqual(connect4Lib.validBoard(bigBoard), false);
  });

  it("Columns should not have more than 6 pieces", function() {
    assert.strictEqual(connect4Lib.validBoard(moreThan6pieces), false);
  });
}

// -----------------------------------------------------------------------------
// gameStatus inputs
// -----------------------------------------------------------------------------

function testBadInput() {
  it("gameStatus should return null if it receives no arguments", function() {
    assert.strictEqual(connect4Lib.gameStatus().status, null);
  });

  it('gameStatus should return null if the argument is "true"', function() {
    assert.strictEqual(connect4Lib.gameStatus(true).status, null);
  });

  it('gameStatus should return null if the argument is "null"', function() {
    assert.strictEqual(connect4Lib.gameStatus(null).status, null);
  });

  it("gameStatus should return null if the argument is a string", function() {
    assert.strictEqual(connect4Lib.gameStatus("banana").status, null);
  });

  it("gameStatus should return null if the argument an empty object", function() {
    assert.strictEqual(connect4Lib.gameStatus({}).status, null);
  });

  it("gameStatus should return null if the argument is an empty array", function() {
    assert.strictEqual(connect4Lib.gameStatus([]).status, null);
  });

  it("gameStatus should return null if a game board is not full", function() {
    assert.strictEqual(connect4Lib.gameStatus(notQuiteAFullBoard).status, null);
  });

  // TODO: add many more test cases here

  it("gameStatus should return null if a game board has more than 7 columns", function() {
    assert.strictEqual(connect4Lib.gameStatus(bigBoard).status, null);
  });

  it("gameStatus should return null if a game board is false", function() {
    assert.strictEqual(connect4Lib.gameStatus(false).status, null);
  });

  it("gameStatus should return null if a game board is undefined", function() {
    assert.strictEqual(connect4Lib.gameStatus(undefined).status, null);
  });
}

// -----------------------------------------------------------------------------
// gameStatus board conditions
// -----------------------------------------------------------------------------

function testGameStatuses() {
  it("empty board in progress", function() {
    assert.equal(
      connect4Lib.gameStatus(connect4Lib.EMPTY_BOARD).status,
      "in_progress"
    );
  });

  it("tie game 1", function() {
    assert.equal(connect4Lib.gameStatus(tieBoard1).status, "tie");
  });

  it("red row win 1", function() {
    assert.equal(connect4Lib.gameStatus(redRowWin1).status, "winner_red");
  });

  it("red column win 1", function() {
    assert.equal(connect4Lib.gameStatus(redColWin1).status, "winner_red");
  });

  // TODO: add many more test cases here
}

// -----------------------------------------------------------------------------
// Run the tests
// -----------------------------------------------------------------------------

describe("validBoard", testValidBoard);
describe("Bad Input", testBadInput);
describe("Game Statuses", testGameStatuses);
