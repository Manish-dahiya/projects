let playerChoice=document.querySelector("#playerchoice");
let computerchoice=document.querySelector("#computerchoice");
let result=document.querySelector("#result");

let choices=["rock","scissor","paper"];

 function playGame(playerchoice)
{
    console.log("clicked")
 let computerselected=choices[Math.floor(Math.random()*3)];
 let resultdisplay=""
 if(playerchoice===computerselected){
    resultdisplay="IT IS A TIE!"
    result.classList="tie"
 }
 else{
    result.classList="";
    if(playerchoice=="rock"){
        if(computerselected=="paper"){
            resultdisplay="YOU LOOSE";
        }
        else{
            resultdisplay="you won";
        }
    }
    else if(playerchoice=="paper"){
        if(computerselected=="scissor"){
            resultdisplay="you loose"
        }
        else{
            resultdisplay="you won"
        }

    }
    else if(playerchoice=="scissor"){
        if(computerselected=="rock"){
            resultdisplay="you loose"
        }
        else{
            resultdisplay="you won"
        }
    }
   
 
}
playerChoice.textContent=`PLAYER:${playerchoice}`
computerchoice.textContent=`COMPUTER: ${computerselected}`
result.textContent=resultdisplay;
}

