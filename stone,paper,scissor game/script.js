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
    result.classList=""
    switch(playerchoice){
    case "rock":
      resultdisplay=  (computerselected==="paper") ? "YOU LOOSE!":"YOU WIN!";
        break;
    case "paper":
        resultdisplay=(computerselected==="scissor") ? "YOU LOOSE!":"YOU WIN!";
        break;
    case "scissor":
      resultdisplay=  (computerselected==="rock") ? "YOU LOOSE!":"YOU WIN!"
        break;

 }
 
}
playerChoice.textContent=`PLAYER:${playerchoice}`
computerchoice.textContent=`COMPUTER: ${computerselected}`
result.textContent=resultdisplay;


 switch(resultdisplay){
    case "YOU WIN!":
        result.classList="green";
        break;
    case "YOU LOOSE!":
        result.classList="red";
        break;

 }
}

