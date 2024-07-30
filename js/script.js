let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");




function playGame(playerChoice) {
   
  clearMessages();

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
          printMessage("Computer: " + argComputerMove + "<br>Player: " + argPlayerMove +"<br>You win");
        } else if( argComputerMove == "scissors" && argPlayerMove == "rock"){
          printMessage("Computer: " + argComputerMove + "<br>Player: " + argPlayerMove +"<br>You win");
        } else if( argComputerMove == "paper" && argPlayerMove == "scissors"){
          printMessage("Computer: " + argComputerMove + "<br>Player: " + argPlayerMove +"<br>You win");
        } else if (argComputerMove == argPlayerMove){
          printMessage("Computer: " + argComputerMove + "<br>Player: " + argPlayerMove +"<br>Draw");
        } else if(argComputerMove == "incorrect choice" || argPlayerMove == "incorrect choice"){
          printMessage("Incorrect choice. <br>Computer: " + argComputerMove + " <br>Player: " + argPlayerMove);
        } else {
          printMessage("Computer: " + argComputerMove + "<br>Player: " + argPlayerMove +"<br>You lose");
        }
  }

  let computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));

  // let playerChoice = prompt("what is your ryuch? (1 - stone, 2 - paper, 3 - scissors)");
  playerMove = getMoveName(playerChoice);

  displayResult(computerMove, playerMove);
}


rockBtn.addEventListener('click', ()=> {
  playGame(1);
});

paperBtn.addEventListener('click', ()=> {
  playGame(2);
});

scissorsBtn.addEventListener('click', ()=> {
  playGame(3);
});