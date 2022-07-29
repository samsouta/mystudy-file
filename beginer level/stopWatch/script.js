const timerWatch = document.getElementsByClassName ("stopWatch")[0];
const startBtn = document.getElementsByClassName ("btn")[0];
const pauseBtn = document.getElementsByClassName("btn")[1];
const continueBtn = document.getElementsByClassName("btn")[2];
const restartBtn = document.getElementsByClassName("btn")[3];
const miniBtn = document.getElementsByClassName("miniSecond")[0];

let seconds = 0; minutes = 0; hours = 0;
let stopTimer;
let mini = 0;
let miniInterval;
const miniFunction = () => {
    mini += 1;
    const miniSecond = mini < 10 ? "00" + mini.toString() : mini < 100 ? "0" + mini.toString() : mini;
    miniBtn.textContent = miniSecond;
}
const startFunction = () => {
    stopTimer = setInterval(endTime, 1000)
     miniInterval = setInterval(miniFunction,100);
}
const endTime = () => {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes === 60) {
        minutes = 0;
        hours += 1
}
const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
const hoursText = hours < 10 ? "0" + hours.toString() : hours;
timerWatch.textContent = hoursText + ":" + minutesText + ":" + secondsText
}
startBtn.addEventListener("click",startFunction);

const pauseFunction = () => {
    clearInterval(stopTimer);
    clearInterval(miniInterval);
}
pauseBtn.addEventListener("click", pauseFunction);

const continueFunction = () => {
    clearInterval(stopTimer);
    stopTimer = setInterval(endTime, 1000)
    clearInterval(miniInterval);
    miniInterval = setInterval(miniFunction,100);
}
continueBtn.addEventListener("click", continueFunction);

const restartFunction = () => { 
    clearInterval(stopTimer);
   seconds = 0; minutes = 0; hours = 0;
   stopTimer = setInterval(endTime, 1000)
   clearInterval(miniInterval);
   mini = 0;
   miniInterval = setInterval(miniFunction,100);
    
}
restartBtn.addEventListener("click", restartFunction)

