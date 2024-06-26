const boxes=document.querySelectorAll(".boxes");
const winnerDiv=document.querySelector(".winner")
const resetBtn=document.querySelector(".reset");            
const newGamebtn=document.querySelector(".newGame");            
console.log(boxes)

let turnO=true;

let winigPatterns=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
]


resetBtn.addEventListener("click",() => {
   trunO=true;
   for (const box of boxes) {
      box.disabled=false;
      box.innerHTML=""
   }
})
newGamebtn.addEventListener("click",() => {
   trunO=true;
   for (const box of boxes) {
      box.disabled=false;
      box.innerHTML=""
      winnerDiv.innerHTML=""
   }
})

boxes.forEach((box)=>{
 box.addEventListener("click",() => {
    if(turnO){
      box.innerHTML="O";
      box.style.color="green"
      turnO=false;
    }
    else{
      box.innerHTML="X";
      box.style.color="red"
      turnO=true;
    }
    //since the button is clicable again
    box.disabled=true;

    checkWinning();
 })
})

function checkWinning(){
   for(let pattern of winigPatterns){
      let pos1Val=boxes[pattern[0]].innerHTML;
      let pos2Val=boxes[pattern[1]].innerHTML;
      let pos3Val=boxes[pattern[2]].innerHTML;

      if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
         if(pos1Val==pos2Val && pos2Val==pos3Val){
            winnerDiv.innerHTML=`Congratulations the winner is ${pos1Val}`
            // alert(`Congratulations the winner is ${pos1Val}`)
            //you also have to disable the buttons after a win
            for(let box of boxes){
               box.disabled=true;
            }
         }
      }

   }
}



//html collection is different from the array.