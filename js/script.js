let computerMove = Math.floor(Math.random() * 3 + 1);

let playerMove = prompt("what is your ryuch? (1 - stone, 2 - paper, 3 - scissors)");

console.log("the computer has drawn a number " + computerMove);
console.log("player selected  " + playerMove);

if(computerMove == 1) {
    computerMove = "rock";
} else if(computerMove == 2) {
    computerMove ="paper";
} else if(computerMove == 3){
    computerMove = "scissors";
} else {
    computerMove = "incorrect choice";
}

if(playerMove == 1) {
    playerMove = "rock";
} else if(playerMove == 2) {
    playerMove = "paper";
} else if(playerMove == 3) {
    playerMove = "scissors";
} else {
    playerMove = "incorrect choice";
}

console.log("the computer has drawn a number " + computerMove);
console.log("player selected  " + playerMove);

if(computerMove == "rock" && playerMove == "paper"){
    printMessage("You win");
  } else if( computerMove == "scissors" && playerMove == "rock"){
    printMessage("You win");
  } else if( computerMove == "paper" && playerMove == "scissors"){
    printMessage("You win");
  } else if (computerMove == playerMove){
    printMessage("Draw");
  } else if (computerMove == "incorrect choice" || playerMove == "incorrect choice") {
    printMessage("Incorrect choice. Computer: " + computerMove + ", player: " + playerMove);
  } else {
    printMessage("You lose");
  }
  