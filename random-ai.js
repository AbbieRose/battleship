var rows = 10;
var cols = 10;

var hitCount = 0;
var computerShotsTaken = 0;
var myBoard = document.getElementById("computer-board")
var opponentBoard = document.getElementById("human-board")

// pick for now but randomly generate later
var aiBoard = [
    [0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
]

for (i = 0; i < CONSTANTS.cols; i++) {
    for (j = 0; j < CONSTANTS.rows; j++) {
        var square = document.createElement("div");
        myBoard.appendChild(square);

        square.id = 'c' + j + i; // like do we need the s

        var topPosition = j * CONSTANTS.squareSize;
        var leftPosition = i * CONSTANTS.squareSize;

        square.style.top = topPosition + 'px';
        square.style.left = leftPosition + 'px';
    }
}

function fireTorpedo() {
    /*for(i = 0; i < 100; i++) {
        var nextRow = Math.floor(Math.random() * 10);
        var nextCol = Math.floor(Math.random() * 10);
        var cell = document.getElementById('h' + nextRow + nextCol);
        var color = cell.style.backgroundColor;
        cell.style.backgroundColor = ;
        setTimeout(function() {
            cell.style.backgroundColor = ccell.style.backgroundColor - 100;
        }, 1000);
        
    }*/
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    console.log("torpedo fired at h" + row + col);
    document.getElementById('h'+ row + col).click() // might be backwards
}

myBoard.addEventListener("click", onTorpedoFire, false);

function onTorpedoFire(e) {
    console.log("in here");
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
        }
        if (hitCount == 17) {
            alert("You defeated all the enemy battleships! You win!")
        } else {
            setTimeout(function() {

            }, 5000);
            fireTorpedo();
        }
    }
    e.stopPropagation();
}
