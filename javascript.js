//function which selects random options for computer
//Array from which getComputerChoice function select option
const computerChoice = ["Rock", "Paper", "Scissors"];
function getComputerChoice(min, max){
    let num = Math.floor(Math.random() * (max - min + 1) + min );
    return computerChoice[num] ;
    }
        
const computerSelection = getComputerChoice(0,2);
console.log(computerSelection);

