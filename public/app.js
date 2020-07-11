var min = 0;
var sec = 0;
var msec = 0;
var minDisplay = document.getElementById('min');
var secDisplay = document.getElementById('sec');
var msecDisplay = document.getElementById('msec');
var interval;
var historyMin = [];
var historySec = [];
var historyMsec = [];

function timer(){
    msec++;
    msecDisplay.innerHTML = msec;
    if(msec >= 100){
        sec++;
        msec = 0;
        secDisplay.innerHTML = sec;
    }
    else if(sec >= 60){
        min++;
        sec = 0;
        minDisplay.innerHTML = min;
    }
}
function start(){
    interval = setInterval(timer, 10);
    document.getElementById('btnStart').disabled = true;
}
function stop(){
    clearInterval(interval);
    document.getElementById('btnStart').disabled = false;
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minDisplay.innerHTML = 0;
    secDisplay.innerHTML = 0;
    msecDisplay.innerHTML = 0;
    clearInterval(interval);
    document.getElementById('btnStart').disabled = false;
}
function saveRecord(){
    historyMin.unshift(minDisplay.innerHTML);
    historySec.unshift(secDisplay.innerHTML);
    historyMsec.unshift(msecDisplay.innerHTML);
    document.getElementById('history').innerHTML = "";
    for(var i = 0; i < historyMsec.length; i++){
        document.getElementById('history').innerHTML += "<p>" + historyMin[i] + " : " + historySec[i] + " : " + historyMsec[i] + "</p>";
    }
}