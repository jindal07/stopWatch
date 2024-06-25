var timerEl=document.querySelector(".timer");
var startEl=document.querySelector(".start");
var stopEl=document.querySelector(".stop");
var resetEl=document.querySelector(".reset");

startEl.addEventListener("click",start);
stopEl.addEventListener("click",stop);
resetEl.addEventListener("click",reset);

var startTime=0;
var elapsedTime=0;
var timerInterval;

document.addEventListener("keydown",function(event){
    var keyVal=event.key;
    if(keyVal==="Enter"){
        start();
    }
    else if(keyVal==="Escape"){
        reset();
    }
    else if(keyVal===" "){
        stop();
    }
})



function start(){
     startTime=Date.now() -elapsedTime;
     timerInterval=setInterval(function(){
        elapsedTime=Date.now() - startTime;
        timerEl.textContent=formatTime(elapsedTime);

        startEl.disabled=true;
        stopEl.disabled=false;
     },10);
}

function formatTime(elapsedTime){
    var hours=Math.floor(elapsedTime/3600000);
    var minutes=Math.floor((elapsedTime%3600000)/60000);
    var seconds=Math.floor((elapsedTime%60000)/1000);
    var milliseconds=Math.floor((elapsedTime%1000)/10);
    return(
        (hours<10?"0"+hours:hours)+":" +
        (minutes<10?"0"+minutes:minutes)+":" +
        (seconds<10?"0"+seconds:seconds)+"." +
        (milliseconds<10?"0"+milliseconds:milliseconds)
    )
}

function stop(){
   clearInterval(timerInterval);
   startEl.disabled=false;
   stopEl.disabled=true;
}

function reset(){
    clearInterval(timerInterval);
    elapsedTime=0;
    timerEl.textContent="00:00:00";
    startEl.disabled=false;
    stopEl.disabled=true;
}