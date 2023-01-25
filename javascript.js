function functionOne(playerSelection = "Rock", computerSelection){
  function randomOption(){
    const optionsArray = ["Rock", "Paper", "Scissors"];
    const randomIndexNo =  Math.floor(Math.random()*optionsArray.length);
    return optionsArray[randomIndexNo];
  }
  computerSelection = randomOption();

  if(playerSelection == computerSelection){
    console.log("A Tie");
  } else if(
    playerSelection == "Rock" && computerSelection == "Scissors"  ||    
    playerSelection == "Paper" && computerSelection == "Rock"  ||
    playerSelection == "Scissors" && computerSelection == "Paper"){
    console.log(`You Won!${playerSelection} beats ${computerSelection}`);
  } else{
    console.log( `You Lose!${computerSelection} beats ${playerSelection}`);
  }   
}

//Function Two
function functionTwo(playerSelection = "Paper", computerSelection){
  function randomOption(){
    const optionsArray = ["Rock", "Paper", "Scissors"];
    const randomIndexNo =  Math.floor(Math.random()*optionsArray.length);
    return optionsArray[randomIndexNo];
  }
  computerSelection = randomOption();

  if(playerSelection == computerSelection){
    console.log("A Tie");
  } else if(
    playerSelection == "Rock" && computerSelection == "Scissors"  ||    
    playerSelection == "Paper" && computerSelection == "Rock"  ||
    playerSelection == "Scissors" && computerSelection == "Paper"){
    console.log(`You Won!${playerSelection} beats ${computerSelection}`);
  } else{
    console.log( `You Lose!${computerSelection} beats ${playerSelection}`);
  }   
}

//Function Three
function functionThree(playerSelection = "Scissors", computerSelection){
  function randomOption(){
    const optionsArray = ["Rock", "Paper", "Scissors"];
    const randomIndexNo =  Math.floor(Math.random()*optionsArray.length);
    return optionsArray[randomIndexNo];
  }
  computerSelection = randomOption();

  if(playerSelection == computerSelection){
    console.log("A Tie");
  } else if(
    playerSelection == "Rock" && computerSelection == "Scissors"  ||    
    playerSelection == "Paper" && computerSelection == "Rock"  ||
    playerSelection == "Scissors" && computerSelection == "Paper"){
    console.log(`You Won!${playerSelection} beats ${computerSelection}`);
  } else{
    console.log( `You Lose!${computerSelection} beats ${playerSelection}`);
  }   
}

