const timeView = document.getElementsByClassName("timeDivContainer")[0];

const btnPlay = document.getElementsByClassName("play")[0]
const btnPause = document.getElementsByClassName("pause")[0]
const btnContainue= document.getElementsByClassName("containue")[0]
const btnReset = document.getElementsByClassName("reset")[0]
// 1
let hour = 0, minuate = 0, second = 0;
let startTime;
let playNumbere;
const playFunction = () => {
    playNumber = () => {
        second += 1;
        if (second === 60) {
            second = 0
            minuate += 1;
        }
        if (minuate === 60) {
            minuate = 0
            hour += 1
        }
          // condion > 0 ? 2 + 1 : 2- 1 ; // use this method
        const secondTap = second < 10 ? "0" + second.toString() : second ;
        const minuateTap = minuate < 10 ? "0" + minuate.toString() : minuate ;
        const hourTap = hour < 10 ? "0" + hour.toString() : hour ;
        timeView.textContent = hourTap + ":" + minuateTap + ":" + secondTap 
    }
    // ans19195436  

    startTime = setInterval(playNumber,1000)
    
}
btnPlay.addEventListener("click", playFunction)  // start button
// 2
const pauseFunction = () => {
    clearInterval(startTime)
}
btnPause.addEventListener("click", pauseFunction)  // pause button
// 3 
const containueFunction = () => {
    clearInterval(startTime)
    startTime = setInterval(playNumber,1000)
}
btnContainue.addEventListener("click", containueFunction) // containue button
// 4
const resetFunction = () => {
    clearInterval(startTime)
    hour = 0, minuate = 0, second = 0;
    startTime = setInterval(playNumber,1000)
    
    console.log ( "hello my pan ei phyu")
}
btnReset.addEventListener("click", resetFunction) // reset button

