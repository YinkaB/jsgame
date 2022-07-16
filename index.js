//WELCOME TEXT  
alert("This is a rock,paper and scissors game run in the console. Are you ready?")


//DECLEARING VAIRABLES
let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

//DECLEARING AND REQUESTING  USER INPUT
let userChoiceDisplay = prompt("Rock, Paper, or Scissors");
let lower = userChoiceDisplay.toLowerCase();


//FUNCTION THAT HOLDS USER CHOICE
function getUserChoice(){
   console.log("You chose " + lower)
}

//DISPLAYING FUNCTIONS
getUserChoice()
generatecompChoice()
getResult() 


// GENERATING COMPUTER CHOICE 

function generatecompChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1){
        computerChoice = "rock"
        console.log("Computer chose rock")
    }
    if(randomNumber === 2){
        computerChoice = "paper"
        console.log("Computer chose paper")
    }
    if(randomNumber === 3){
        computerChoice = "scissors"
        console.log("Computer chose scissors")
    }


}

// COMPARING CHOICES AND DISPLAYING RESULTS IN THE CONSOLE

function getResult(){
   let userChoiceDisplay = lower;
if(computerChoice === userChoiceDisplay){
    result = "its a draw!"
}
if(computerChoice === 'rock' && userChoiceDisplay === 'paper'){
  playerScore++ 
   result = "you win!"
    
}
if(computerChoice === 'rock' && userChoiceDisplay === 'scissors'){
    computerScore++
     result = "you lost!"
   
}
if(computerChoice === 'paper' && userChoiceDisplay === 'rock'){
    computerScore++;
    result = "you lost!"
    
}
if(computerChoice === 'paper' && userChoiceDisplay === 'scissors'){
     playerScore++;
     result = "you win!"
   
}
if(computerChoice === 'scissors' && userChoiceDisplay === 'paper'){
    computerScore++;
    result = "you lost!"
    
}
if(computerChoice === 'scissors' && userChoiceDisplay === 'rock'){
   playerScore++;
    result = "you win!"
    
}
 console.log(result)

}
// //Rounds
// function game(rounds){
//     const computerSelection = generatecompChoice();
//     for(let i=0; i<rounds; i++){
//         getResult(prompt('Rock, paper, or scissors',computerChoice),computerChoice);
        
//     }
//     if(playerScore>computerScore){
//         console.log(`You are the winner with a score of ${playerScore}`);
//     } else if(playerScore<computerScore){
//         console.log(`You lost, computer won with a score of ${computerScore}`);
//     }else{
//         console.log('The game is a tie');
//     }
// }

// game(5);