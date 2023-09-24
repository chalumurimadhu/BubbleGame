var timer = 60
var score  = 0
var hit1 = ""

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hit1 = Math.floor(Math.random() *10);
    document.querySelector("#hitval").textContent = hit1;
}


function  makeBubble(){
    var clutter = "";

for (var i=1;i<115;i++){
    var value = Math.floor(Math.random()*10)
   clutter += ` <div class="bubble">${value}</div>`;
    
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timer1").textContent = timer
        
        }
        else{
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>
            <h2>Your Score is ${score}</h2>`;
           
           
        }
    },1000)// setInterval run the code evey secound(1000)
}

var parent = document.querySelector("#pbtm")

parent.addEventListener("click", function(dets){
    var bubbleVal = Number(dets.target.textContent);
    if(bubbleVal === hit1){
        increaseScore();
        getNewHit();
        makeBubble();

    }
});
getNewHit();
runTimer();
makeBubble();
