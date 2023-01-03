//this asks for the player choice
let playerChoice = prompt("Select your option:");
//making the playerChoice titlecase(Only first letter is capital)
let fisrtLetterCapital = playerChoice.charAt(0).toUpperCase();
let remainingLetterssmall =  playerChoice.slice(1).toLowerCase();
const playerSelection = fisrtLetterCapital + remainingLetterssmall
console.log(playerSelection);

//function which selects randomly from Rock,Paper and Scissors as computer choice
const computerChoice = ["Rock", "Paper", "Scissors"];
function getComputerChoice(min, max){
    let num = Math.floor(Math.random() * (max - min + 1) + min );
    return computerChoice[num] ;
    }
        
let computerSelection = getComputerChoice(0,2);
console.log(computerSelection);
 
//function which copmares both options and return results
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
         return "A Tie";
    } else if(
      playerSelection == "Rock" && computerSelection == "Scissors"  ||    
      playerSelection == "Paper" && computerSelection == "Rock"  ||
      playerSelection == "Scissors" && computerSelection == "Paper"){
         return `You Won!${playerSelection} beats ${computerSelection}`;
    } else{
        return  `You Lose!${computerSelection} beats ${playerSelection}`;
    }   
}
const result =  playRound(playerSelection, computerSelection);
console.log(result);

//function which loops through playRound five times
//function game(){
    //for(var i=1; i <= 5; i++){
       //let n = playRound(playerSelection, computerSelection);
      // console.log(playRound(playerSelection, computerSelection));
    //}
//}
//console.log(game());
//console.log(playRound(playerSelection, computerSelection));