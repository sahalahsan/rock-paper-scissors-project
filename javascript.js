//Accessing the div element
var btnList = document.querySelector(".options");

//Accessing the result container
var resultContainer = document.querySelector("#result");

//Adding eventListener 
btnList.addEventListener("click", playRound);

//Function playing RPS(playRound)
function playRound(e) {
  let playerSelection = e.target.value;
  function randomOption(){
    const optionsArray = ["Rock", "Paper", "Scissors"];
    const randomIndexNo =  Math.floor(Math.random()*optionsArray.length);
    return optionsArray[randomIndexNo];
  }
  let computerSelection = randomOption();
  if(playerSelection == computerSelection){
    resultContainer.textContent =  "A Tie";
 } else if(
   playerSelection == "Rock" && computerSelection == "Scissors"  ||    
   playerSelection == "Paper" && computerSelection == "Rock"  ||
   playerSelection == "Scissors" && computerSelection == "Paper"){
    resultContainer.textContent = `You Won!${playerSelection} beats ${computerSelection}`;
 } else {
  resultContainer.textContent = `You Lose!${computerSelection} beats ${playerSelection}`;
 }  
};