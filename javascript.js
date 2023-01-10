let playerSelection;
let computerSelection;
let tied = 0;
let won = 0;
let lost = 0;

//Function that plays single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){

  //User Input  
  const playerChoice = prompt("Select your option:");
  let fisrtLetterCapital = playerChoice.charAt(0).toUpperCase();
  let remainingLetterssmall =  playerChoice.slice(1).toLowerCase();
  playerSelection = fisrtLetterCapital + remainingLetterssmall;

  const computerChoice = ["Rock", "Paper", "Scissors"];

  //Function that randomly selects Rock Paper Scissors as Computers Choice
  function getComputerChoice(min, max){
    let num = Math.floor(Math.random() * (max - min + 1) + min );
    return computerChoice[num] ;
  }
  computerSelection = getComputerChoice(0,2);
  if(playerSelection == computerSelection){
      ++tied;
      return "A Tie";
    } else if(
      playerSelection == "Rock" && computerSelection == "Scissors"  ||    
      playerSelection == "Paper" && computerSelection == "Rock"  ||
      playerSelection == "Scissors" && computerSelection == "Paper"){
      ++won;
      return `You Won!${playerSelection} beats ${computerSelection}`;
    } else{
      ++lost;
      return  `You Lose!${computerSelection} beats ${playerSelection}`;
    }   
}

//Function which runs playRound function five times and announce rounds result
function game(){
  for(let i=0;i<5;i++){
    console.log(playRound(playerSelection, computerSelection));
  }
  if(tied === 5 || won === lost){
    return "Round Tied";
  } else if(won > lost){
    return "You Won the Round";
  } else{
    return "You Lost the Round";
  }
}
console.log(game());
 