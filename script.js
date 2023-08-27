function getComputerChoice(){
    let choice=["Rock","Paper","Scissors"];
    let compChoice=Math.floor(Math.random()*choice.length);
    return (choice[compChoice]);
}

function playRound(comChoice,playerChoice){
    let result;
    if(playerChoice.toUpperCase()==="ROCK"){
        if(comChoice==="Rock"){
            result="It is a tie!";
        }
        if(comChoice==="Paper"){
            result="You Lose! Paper beats Rock";
        }
        else{
            result="You Won! Rock beats Scissors";
        }
    }
    if(playerChoice.toUpperCase()==="PAPER"){
        if(comChoice==="Rock"){
            result="You Won! Paper beats Rock";
        }
        if(comChoice==="Paper"){
            result="It is a tie!";
        }
        else{
            result="You Lose! Scissors beats Paper";
        }
    }
    if(playerChoice.toUpperCase()==="Scissors"){
        if(comChoice==="Rock"){
            result="You Lose! Rock beats Scissors";
        }
        if(comChoice==="Paper"){
            result="You Won! Scissors beats Paper";
        }
        else{
            result="It is a tie!";
        }
    }
    return result;
}

function game(){
    for(let i=0;i<5;i++){
        let comp=getComputerChoice();
        let player=prompt("Enter your choice");
        console.log(playRound(comp,player));
    }
}

game();