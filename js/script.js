let computerMove = Math.floor(Math.random() * (19 - 11 + 1) + 11);

console.log("the computer has drawn a number " + computerMove);

if(computerMove == 1) {
    computerMove = "Rockk";
} else if(computerMove == 2) {
    computerMove == "Paper";
} else {
    computerMove == "scissors";
}
