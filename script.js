
const buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener("click",playRound)

})

const compScore=document.querySelector("#compScore");
const userScore=document.querySelector("#userScore");
const uChoice=document.querySelector("#uChoice");
const cChoice=document.querySelector('#cChoice');
let computerScores=0;
let userScores=0;




function playRound(e){
    let humanChoice = e.target.id;
    let computerChoice=getComputerChoice();

    cChoice.textContent=computerChoice;
    uChoice.textContent=humanChoice;
    

    if(humanChoice=="rock"&&computerChoice=="paper"){
        computerScores++;
         compScore.textContent=computerScores;
     }
     else if(humanChoice=="rock"&&computerChoice=="rock"){
            
     }
     else if(humanChoice=="rock"&&computerChoice=="scissors"){
        userScores++;
         userScore.textContent=userScores
        
     }
     else if(humanChoice=="paper"&&computerChoice=="paper"){
         
     }
     else if(humanChoice=="paper"&&computerChoice=="rock"){
        
         userScores++;
         userScore.textContent=userScores
         
     }
     else if(humanChoice=="paper"&&computerChoice=="scissors"){
        computerScores++;
         compScore.textContent=computerScores;
     }
     else if(humanChoice=="scissors"&&computerChoice=="paper"){
         
        userScores++;
         userScore.textContent=userScores
          
     }
     else if(humanChoice=="scissors"&&computerChoice=="rock"){
         
         computerScores++;
         compScore.textContent=computerScores;
     }
     else if(humanChoice=="scissors"&&computerChoice=="scissors"){
         
     }

     if(Number(computerScores)==5){
        alert("COMPUTER WINS")
        computerScores=0;
        userScores=0;
        compScore.textContent = 0;
        userScore.textContent = 0;
       
     }
     if(Number(userScores)==5){
        alert("YOU WIN")
        computerScores=0;
        userScores=0;
        compScore.textContent = 0;
    userScore.textContent = 0;
     }
}




function getComputerChoice(){
    let choice=Math.floor(Math.random()*12)+1;
    
    if(choice>=1&&choice<=4)return "rock"
    else if(choice>=5&&choice<=8)return "paper"
    else return "scissors" 
}



