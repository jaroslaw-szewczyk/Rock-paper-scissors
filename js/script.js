
function getMoveName(argMoveId){
    if(argMoveId == 1) {
        return "rock";
    } else if(argMoveId == 2) {
        return "paper";
    } else if(argMoveId == 3){
        return "scissors";
    } 
  
    return 'incorrect choice';
}

function displayResult(argComputerMove, argPlayerMove){
    if(argComputerMove == "rock" && argPlayerMove == "paper"){
        printMessage("You win");
      } else if( argComputerMove == "scissors" && argPlayerMove == "rock"){
        printMessage("You win");
      } else if( argComputerMove == "paper" && argPlayerMove == "scissors"){
        printMessage("You win");
      } else if (argComputerMove == argPlayerMove){
        printMessage("Draw");
      } else if(argComputerMove == "incorrect choice" || argPlayerMove == "incorrect choice"){
        printMessage("Incorrect choice. <br>Computer: " + argComputerMove + " <br>Player: " + argPlayerMove);
      } else {
        printMessage("You lose");
      }
}

let computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));

let playerChoice = prompt("what is your ryuch? (1 - stone, 2 - paper, 3 - scissors)");
let playerMove = getMoveName(playerChoice);

displayResult(computerMove, playerMove);