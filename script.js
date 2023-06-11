let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function handleMove(cellIndex) {
    if (board[cellIndex] === "") {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName("cell")[cellIndex].innerHTML = currentPlayer;

        if (checkWinner()) {
            alert(currentPlayer + " " + "You win!");
            resetBoard();
        } else if (board.indexOf("") === -1) {
            alert("Draw!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        let a = winningCombinations[i][0];
        let b = winningCombinations[i][1];
        let c = winningCombinations[i][2];
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
}

function createBoard() {
    let boardElement = document.querySelector(".board");

    for (let i = 0; i < 9; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("onclick", "handleMove(" + i + ")");
        boardElement.appendChild(cell);
    }
}

createBoard();
