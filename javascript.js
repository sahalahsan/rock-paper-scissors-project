//Accessing the div element
var btnList = document.querySelector(".options");

//Accessing the result containers
var resultContainer = document.querySelector("#result");
var roundResultContainer = document.querySelector("#roundresult");

//Adding eventListener 
btnList.addEventListener("click", playRound);

//For Counting button clicks
var btnClickCount = 0;

//Counting each turn result
let tie = 0;
var won = 0;
var lost = 0;

//Function playing RPS(playRound)
function playRound(e) {
  ++btnClickCount;
  
  if(btnClickCount > 5 || tie > 5 || won > 5 || lost > 5) {
    btnClickCount = 1;
    tie = 0;
    won = 0;
    lost = 0;
  }

  let playerSelection = e.target.value;
  function randomOption(){
    const optionsArray = ["Rock", "Paper", "Scissors"];
    const randomIndexNo =  Math.floor(Math.random()*optionsArray.length);
    return optionsArray[randomIndexNo];
  }
  let computerSelection = randomOption();

  if(playerSelection == computerSelection){
    resultContainer.textContent =  "A Tie";
    ++tie; 
  } else if(
   playerSelection == "Rock" && computerSelection == "Scissors"  ||    
   playerSelection == "Paper" && computerSelection == "Rock"  ||
   playerSelection == "Scissors" && computerSelection == "Paper"){
    resultContainer.textContent = `You Won!${playerSelection} beats ${computerSelection}`;
    ++won; 
  } else {
    resultContainer.textContent = `You Lose!${computerSelection} beats ${playerSelection}`;
    ++lost; 
  }  
  
  if(btnClickCount == 5) {
   if(tie === 5 || won === lost){
      roundResultContainer.style.display = "block";
      roundResultContainer.textContent = "Round Tied";
    } else if(won > lost){
      roundResultContainer.style.display = "block";
      roundResultContainer.textContent = "You Won the Round";
    } else{
      roundResultContainer.style.display = "block";
      roundResultContainer.textContent = "You Lost the Round";
    }
  } else {
    roundResultContainer.style.display = "none";
  }

};
