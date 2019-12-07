var CONSTANTS = {};
CONSTANTS.AVAILABLE_SHIPS = ['carrier','battleship','destroyer','submarine','patrolboat']
CONSTANTS.rows = 10;
CONSTANTS.cols = 10;
CONSTANTS.squareSize = 50;
CONSTANTS.HUMAN = 0;
CONSTANTS.COMPUTER = 1;
CONSTANTS.CSS_TYPE_EMPTY = 'empty';
CONSTANTS.CSS_TYPE_SHIP = 'ship';
CONSTANTS.CSS_TYPE_MISS = 'miss';
CONSTANTS.CSS_TYPE_HIT = 'hit';
CONSTANTS.CSS_TYPE_SUNK = 'sunk';
// Grid code:
CONSTANTS.TYPE_EMPTY = 0; // 0 = water (empty)
CONSTANTS.TYPE_SHIP = 1; // 1 = undamaged ship
CONSTANTS.TYPE_MISS = 2; // 2 = water with a cannonball in it (missed shot)
CONSTANTS.TYPE_HIT = 3; // 3 = damaged ship (hit shot)
CONSTANTS.TYPE_SUNK = 4; // 4 = sunk ship
CONSTANTS.USED = 1;
CONSTANTS.UNUSED = 0;

var usedShips = [CONSTANTS.UNUSED,CONSTANTS.UNUSED,CONSTANTS.UNUSED,CONSTANTS.UNUSED,CONSTANTS.UNUSED]

var turn = 0;
var shotsTaken = 0;
var myBoard = document.getElementById("human-board")
var opponentBoard = document.getElementById("computer-board")
var gameOver = false;
var shipBeingPlaced = "";

// randomly generate for now, but let user place later
var board = [
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [1,0,0,0,0,0,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0]
    ]

for (i = 0; i < CONSTANTS.cols; i++) {
    for (j = 0; j < CONSTANTS.rows; j++) {
        var square = document.createElement("div");
        myBoard.appendChild(square);

        square.id = 'h' + j + i; // like do we need the s
        if(board[j][i]) {
            square.style.background = 'black'
        }

        var topPosition = j * CONSTANTS.squareSize;
        var leftPosition = i * CONSTANTS.squareSize;

        square.style.top = topPosition + 'px';
        square.style.left = leftPosition + 'px';
    }
}

/* lazy way of tracking when the game is won: just increment hitCount on every hit
   in this version, and according to the official Hasbro rules (http://www.hasbro.com/common/instruct/BattleShip_(2002).PDF)
   there are 17 hits to be made in order to win the game:
      Carrier     - 5 hits
      Battleship  - 4 hits
      Destroyer   - 3 hits
      Submarine   - 3 hits
      Patrol Boat - 2 hits
*/
var hitCount = 0;

// add when all placed
myBoard.addEventListener("click", onTorpedoFire, false);

function onTorpedoFire(e) {
    console.log("Just got fired at.")
    if (e.target !== e.currentTarget) {
        var row = e.target.id.substring(1,2);
        var col = e.target.id.substring(2,3);

        if (board[row][col] == 0) {
            e.target.style.background = '#bbb';
            board[row][col] = 3;
        } else if (board[row][col] == 1) {
            e.target.style.background = 'red';
            board[row][col] = 2;
            hitCount++;
            if (hitCount == 17) {
                alert("All your battleships have been defeated! You lose!")
            }
        }
    }
    e.stopPropagation();
}

// scratchwork

document.getElementById("carrier").onclick = function () {
    console.log("placing carrier")
    shipBeingPlaced = "carrier";
}

document.getElementById("battleship").onclick = function () {
    console.log("placing battleship")
    shipBeingPlaced = "battleship";
}

document.getElementById("destroyer").onclick = function () {
    console.log("placing destroyer")
    shipBeingPlaced = "destroyer";
}

document.getElementById("submarine").onclick = function () {
    console.log("placing submarine")
    shipBeingPlaced = "submarine";
}

document.getElementById("patrolboat").onclick = function () {
    console.log("placing patrolboat")
    shipBeingPlaced = "patrolboat";
}

/*function placingShip(e) {
    if (e.target !== e.currentTarget) {
        var row = e.target.id.substring(1,2);
        var col = e.target.id.substring(2,3);
        var length = 0;
        if(shipBeingPlaced === "carrier") {
            length = 5;
            e.target.style.background = 'red';
        } else if (shipBeingPlaced === "battleship") {
            length = 4;
            e.target.style.background = 'red';
        } else if (shipBeingPlaced === "destroyer") {
            length = 3;
            e.target.style.background = 'red';
        } else if (shipBeingPlaced === "submarine") {
            length = 3;
            e.target.style.background = 'red';
        } else if (shipBeingPlaced === "patrolboat") {
            length = 2;
            e.target.style.background = 'red';
        } else {
            alert("Please select a ship to place first")
        }
        for (l = 0; l < length; l++) {
            
        }
    }
    e.stopPropagation();
}*/