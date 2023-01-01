//this asks for the player choice
let playerChoice = prompt("Select your option:");
//making the playerChoice titlecase(Only first letter is capital)
let fisrtLetterSmall = playerChoice.charAt(0);
let fisrtLetterCapital = fisrtLetterSmall.toUpperCase();
let remainingLetters = playerChoice.slice(1);
let remainingLetterssmall = remainingLetters.toLowerCase();
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
 
//function which copmare both options and returns result
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
         return "A Tie";
    } else {
         return "Result";
    }
}
const result =  playRound(playerSelection, computerSelection);
console.log(result);

