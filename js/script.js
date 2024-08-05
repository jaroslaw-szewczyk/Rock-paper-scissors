{
  // Player DOM elements
  const rockBtn = document.getElementById("rock");
  const paperBtn = document.getElementById("paper");
  const scissorsBtn = document.getElementById("scissors");
  const playerCount = document.getElementById("player-count");
  const playerChoiseBox = document.getElementById("player-choise-box");
  const playerImg = document.getElementById("player-choise-card");
  
  // Computer DOM elements
  const rockCard = document.getElementById("com-rock");
  const paperCard = document.getElementById("com-paper");
  const scissorsCard = document.getElementById("com-scissors");
  const comChoiseBox = document.getElementById("com-choise-box");
  const comImg = document.getElementById("com-choise-card");
  const comCount = document.getElementById("com-count");

  //New game button
  const newGameBtn = document.getElementById("new-game-btn");
  
  // Global variables
  let playerResult = 0;
  let comResult = 0;
  
    
  //Adding classes to computer DOM elements
  function addClassToComCard(argMove) {
    if(argMove == "rock") {
      rockCard.classList.add("display-opt");
      comChoiseBox.classList.remove("display-opt");
      comImg.src = "images/rock.png";
    } else if (argMove == 'paper') {
      paperCard.classList.add("display-opt");
      comChoiseBox.classList.remove("display-opt");
      comImg.src = "images/paper.png";
    } else if(argMove == "scissors") {
      scissorsCard.classList.add("display-opt");
      comChoiseBox.classList.remove("display-opt");
      comImg.src = "images/scissors.png";
    }
  }

  // Adding classes to player DOM elements
  function addClassToPlayerCard(argMove) {
    if(argMove == "rock") {
      rockBtn.classList.add("choise", "display-opt");
      playerChoiseBox.classList.add("choise");
      playerChoiseBox.classList.remove("display-opt");
      playerImg.src = "images/rock.png";
    } else if (argMove == 'paper') {
      paperBtn.classList.add("choise", "display-opt");
      playerChoiseBox.classList.add("choise");
      playerChoiseBox.classList.remove("display-opt");
      playerImg.src = "images/paper.png";
    } else if(argMove == "scissors") {
      scissorsBtn.classList.add("choise", "display-opt");
      playerChoiseBox.classList.add("choise");
      playerChoiseBox.classList.remove("display-opt");
      playerImg.src = "images/scissors.png";
    }
  }

  // Removal of all added classes from DOM
  function removeClass(){
  rockCard.classList.remove("choise", "display-opt");
  paperCard.classList.remove("choise", "display-opt");
  scissorsCard.classList.remove("choise", "display-opt");
  rockBtn.classList.remove("choise", "display-opt");
  paperBtn.classList.remove("choise", "display-opt");
  scissorsBtn.classList.remove("choise", "display-opt");
  comChoiseBox.classList.add("display-opt");
  playerChoiseBox.classList.add("display-opt");
  playerImg.src = " ";
  comImg.src = " "
  } 

  //the function responsible for assigning the appropriate value to players
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

// Function responsible for displaying the result of the game
  function displayResult(argComputerMove, argPlayerMove){
    if(argComputerMove == "rock" && argPlayerMove == "paper"){
        playerCount.innerHTML = playerResult += 1;
        printMessage("You win");
      } else if( argComputerMove == "scissors" && argPlayerMove == "rock"){
        playerCount.innerHTML = playerResult += 1;
        printMessage("You win");
      } else if( argComputerMove == "paper" && argPlayerMove == "scissors"){
        playerCount.innerHTML = playerResult += 1;
        printMessage("You win");
      } else if (argComputerMove == argPlayerMove){
        printMessage("Draw");
      } else if(argComputerMove == "incorrect choice" || argPlayerMove == "incorrect choice"){
        printMessage("Incorrect choice.");
      } else {
        comCount.innerHTML = comResult += 1;
        printMessage("You lose");
      }
  }

  
  // Main game function
  function playGame(playerChoice) {

    //cleaning and removing unnecessary elements from the board
    clearMessages();
    removeClass();
      
    //assignment of computer movement
    const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
    addClassToComCard(computerMove);
    
    //assignment of player movement
    playerMove = getMoveName(playerChoice);
    addClassToPlayerCard(playerMove);

    //display the result of the game
    displayResult(computerMove, playerMove);
  }

  // Response to a clicked element
  rockBtn.addEventListener('click', ()=> {
    playGame(1);
  });

  paperBtn.addEventListener('click', ()=> {
    playGame(2);
  });

  scissorsBtn.addEventListener('click', ()=> {
    playGame(3);
  });

  newGameBtn.addEventListener('click', ()=> {
    clearMessages();
    removeClass();
  });

}