

function getComputerChoice(){
    let choice=Math.floor(Math.random()*12)+1;
    
    if(choice>=1&&choice<=4)return "Rock"
    else if(choice>=5&&choice<=8)return "Paper"
    else return "Scissors" 
}

console.log(getComputerChoice());