let playerScore = 0
let computerScore = 0
let text = ""
function getComputerChoice(){
 choice = Math.random() * 3
 if (choice<=1){
    choice = "rock"
 } else if (choice <=2){
    choice = "paper"
 }
 else{
    choice = "scissors"
 }
 return choice
}
function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase()==="rock" && computerSelection==="scissors"){
        text="You won! Rock smashes scissors."
        playerScore++
        return text
    }
    else if(playerSelection.toLowerCase()==="paper" && computerSelection==="rock"){
        text="You won! Paper covers rock."
        playerScore++
        return text
    }
    else if(playerSelection.toLowerCase()==="scissors" && computerSelection==="paper"){
        text="You won! Scissors cut paper."
        playerScore++
        return text
    }
    else if(playerSelection.toLowerCase()==="scissors" && computerSelection==="rock"){
        text="You lost! Rock smahes scissors"
        computerScore++
        return text
    }
    else if(playerSelection.toLowerCase()==="rock" && computerSelection==="paper"){
        text="You lost! Paper covers rock"
        computerScore++
        return text
    }
    else if(playerSelection.toLowerCase()==="paper" && computerSelection==="scissors"){
        text="You lost! scissors cut paper"
        computerScore++
        return text
    }
    else if(playerSelection.toLowerCase()===computerSelection){
        text="Tie game!"
        return text
    }
    
}
const playerSelection = "RocK"
const computerSelection = getComputerChoice()
console.log(playerSelection.toLowerCase()===computerSelection)
    console.log(playerSelection)
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore)
    console.log(computerScore)