
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
    return humanChoice;
}


let rounds = prompt("How many rounds you want to play")

for(let i=0;i<rounds;i++){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    alert("you: "+humanChoice+"\n"+"Computer: "+computerChoice)
    playRound(humanChoice,computerChoice);
    alert("Computer score  : "+ computerScore + "\n"+"Your score: "+ humanScore);
    
}
alert("Computer final score  : "+ computerScore + "\n"+"Your  final  score: "+ humanScore);

if(computerScore>humanScore)alert("FINAL WINNER IS COMPUTER")
else if(computerScore<humanScore)alert("FINAL WINNER IS YOU")
else alert("FINAL RESULT IS TIE")

function playRound(humanChoice,computerChoice){
    if(humanChoice=="rock"&&computerChoice=="paper"){
        alert("Computer wins") 
        computerScore++;
    }
    else if(humanChoice=="rock"&&computerChoice=="rock"){
        alert("Tie")
       
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"){
        alert("You wins")
         humanScore++;
    }
    else if(humanChoice=="paper"&&computerChoice=="paper"){
        alert("Tie")
    }
    else if(humanChoice=="paper"&&computerChoice=="rock"){
        alert("You wins")
         humanScore++;
    }
    else if(humanChoice=="paper"&&computerChoice=="scissors"){
        alert("Computer wins")
        computerScore++;
    }
    else if(humanChoice=="scissors"&&computerChoice=="paper"){
        alert("You wins")
         humanScore++;
    }
    else if(humanChoice=="scissors"&&computerChoice=="rock"){
        alert("Computer wins")
        computerScore++;
    }
    else if(humanChoice=="scissors"&&computerChoice=="scissors"){
        alert("Tie")
    }
}

