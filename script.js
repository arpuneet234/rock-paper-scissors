
let humanScore=0;
let computerScore=0;
function getComputerChoice(){
    let choice=Math.floor(Math.random()*12)+1;
    
    if(choice>=1&&choice<=4)return "rock"
    else if(choice>=5&&choice<=8)return "paper"
    else return "scissors" 
}



function getHumanChoice(){
    let humanChoice=prompt("Enter : rock , paper or scissors");
    humanChoice=humanChoice.toLowerCase();
    console.log("you: "+humanChoice);
   let computerChoice = getComputerChoice();
   console.log("Computer: "+computerChoice);
   playRound(humanChoice,computerChoice);
}

function playRound(humanChoice,computerChoice){
    if(humanChoice=="rock"&&computerChoice=="paper"){
        console.log("Computer wins")
    }
    else if(humanChoice=="rock"&&computerChoice=="rock"){
        console.log("Tie")
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"){
        console.log("You wins")
    }
    else if(humanChoice=="paper"&&computerChoice=="paper"){
        console.log("Tie")
    }
    else if(humanChoice=="paper"&&computerChoice=="rock"){
        console.log("You wins")
    }
    else if(humanChoice=="paper"&&computerChoice=="scissors"){
        console.log("Computer wins")
    }
    else if(humanChoice=="scissors"&&computerChoice=="paper"){
        console.log("You wins")
    }
    else if(humanChoice=="scissors"&&computerChoice=="rock"){
        console.log("Computer wins")
    }
    else if(humanChoice=="scissors"&&computerChoice=="scissors"){
        console.log("Tie")
    }
    

}

getHumanChoice();