const container=document.querySelector(".container")
const colors=["#e74c3c","#8e44ad","#3498db","#e67e22","#2ecc71"]

for(let i=0;i<500;i++){
    const square=document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover",()=>setColor(square))
    square.addEventListener("mouseout",()=>removeColor(square))

    container.appendChild(square)
}


function setColor(element){
const  color=colors[Math.floor(Math.random()*colors.length)]//it will generate a random numbers between 0 and 4

 element.style.background=color
 element.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(element){
    // restoring the previous styles
    element.style.background="#1d1d1d"
    element.style.boxShadow=" 0 0 2px black"
}