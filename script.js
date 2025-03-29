let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Function to handle cell click
function handleCellClick(index) {
    if (gameOver) return;
    if (gameBoard[index] !== '') return;

    gameBoard[index] = currentPlayer;
    document.getElementById(`cell-${index}`).innerText = currentPlayer;

    checkForWin();
    switchPlayer();
}

// Function to check for win
function checkForWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            alert(`Player ${gameBoard[a]} wins!`);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameOver = true;
        alert('It\'s a tie!');
    }
}

// Function to switch player
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to reset game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;

    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).innerText = '';
    }
}

// Add event listeners to cells
for (let i = 0; i < 9; i++) {
    document.getElementById(`cell-${i}`).addEventListener('click', () => handleCellClick(i));
}

// Add event listener to reset button
document.getElementById('reset-button').addEventListener('click', resetGame);
