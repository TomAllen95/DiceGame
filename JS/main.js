let diceNo = 0
let whosGo = true;
let player1Score = 0;
let player2Score = 0
const button = document.getElementById("button");
const restart = document.getElementById("restart")

function rollDice() {
    diceNo = Math.floor(Math.random() * Math.floor(6) + 1);
    // console.log(`the player score is ${playerScore}`)
}

let displayImage = document.getElementById("diceImage"); //associating with html 

function displayDice() {
    displayImage.innerHTML = `<img src="./Img/side${diceNo}.png" alt="roll the dice" style="width:500px"></img>`
    console.log(`hello ${diceNo}`);
}
// adding stuff to html

var player1scr = document.getElementById("player1score");
var player2scr = document.getElementById("player2score");
var backGroundColour = document.getElementById("diceImage")

function updateScore(playerscore, playerscr) {
    playerscr.innerHTML = `<h2 id='player1score'>${playerscore}</h2>`;
    // console.log("I am updating scores!")
}

// function scoring(number) {
//     if (number == 1) {
//         whosGo = !whosGo;
//         // console.log("Change of Turn!");
//     }
// }

function checkIfGameOver() {
    if ((diceNo == 1) && (whosGo == true) && (player1Score < 20)) {
        alert("Player 1 rolled a 1, so player 2 wins");
        restart.style.visibility = "visible";
        button.style.visibility = "hidden";
        backGroundColour.style.background = "gold";
    } else if ((diceNo == 1) && (whosGo == false) && (player2Score < 20)) {
        alert("Player 2 rolled a 1, so player 1 wins");
        restart.style.visibility = "visible";
        button.style.visibility = "hidden";
        backGroundColour.style.background = "gold";
    } else if ((whosGo == true) && (player1Score >= 20)) {
        alert("Player 1 wins");
        restart.style.visibility = "visible";
        button.style.visibility = "hidden";
        backGroundColour.style.background = "gold";
    } else if ((whosGo == false) && (player2Score >= 20)) {
        alert("Player 2 wins");
        restart.style.visibility = "visible";
        button.style.visibility = "hidden";
        backGroundColour.style.background = "gold";
    }
}
//on click
button.addEventListener('click', () => {
    if (whosGo) { // player 1
        rollDice();
        displayDice();
        player1Score += diceNo;
        updateScore(player1Score, player1scr);
        checkIfGameOver();
        // scoring(diceNo);
        whosGo = !whosGo;

    } else {
        rollDice();
        displayDice();
        player2Score += diceNo;
        updateScore(player2Score, player2scr);
        checkIfGameOver();
        // scoring(diceNo);
        whosGo = !whosGo;
    }
})
restart.addEventListener('click', () => {
    window.location.replace(window.location.pathname + window.location.search + window.location.hash);
})


// button.addEventListener('click', () => {

//     rollDice();
//     displayDice();

//     if (whosGo) { // player 1
//         player1Score += diceNo;
//         updateScore(player1Score, player1scr);
//     } else {
//         player2Score += diceNo;
//         updateScore(player2Score, player2scr);
//     }

//     checkIfGameOver();
//     // scoring(diceNo);
//     whosGo = !whosGo;
// })