let computerMove = Math.floor(Math.random() * 3 + 1);

let playerMove = prompt("what is your ryuch? (1 - stone, 2 - paper, 3 - scissors)");

console.log("the computer has drawn a number " + computerMove);
console.log("player selected  " + playerMove);

if(computerMove == 1) {
    computerMove = "Rockk";
} else if(computerMove == 2) {
    computerMove == "Paper";
} else {
    computerMove == "scissors";
}

if(playerMove == 1) {
    playerMove = "Rockk";
} else if(playerMove == 2) {
    playerMove == "Paper";
} else {
    playerMove == "scissors";
}
