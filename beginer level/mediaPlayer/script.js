const playListContainer = document.getElementsByClassName("playListContainer")[0];
const getAudio = document.getElementsByClassName("audio")[0];
const playTime = document.getElementsByClassName("playTime")[0];
const currentBar = document.getElementById("currentBar");
const getPlayBtn = document.getElementsByClassName("playBtn")[0];
const getPauseBtn = document.getElementsByClassName("pauseBtn")[0];
const getBackBtn = document.getElementsByClassName("backBtn")[0];
const getNextBtn = document.getElementsByClassName("nextBtn")[0];
const playListContainerArray = [
    {musicSrc: "music/music 1.mp3", title: "Alan warker" },
    {musicSrc: "music/music 2.mp3", title: "Chlair" },
    {musicSrc: "music/music 3.mp3", title: "chir lar" },
    {musicSrc: "music/music 4.mp3", title: "don't talk" },
]
for (let i = 0; i< playListContainerArray.length; i++) {
   const playListChild = document.createElement("div");
   playListChild.addEventListener("click", () => {
       const musicSrc = playListContainerArray[i].musicSrc
       getAudio.src = musicSrc;
       getAudio.play()
       isPlaying = true;
       changePauseAndPlay();
       musicId = i;
   })
   playListChild.classList.add("playListChild");
   const playLibrary = (i + 1).toString() + ". " + playListContainerArray[i].title 
   playListChild.textContent = playLibrary;
   playListContainer.append(playListChild);
}
let durFun = "00:00";
let duration = 0;
getAudio.addEventListener("loadeddata", () => {
  duration = Math.floor(getAudio.duration);
   durFun = createMinuateAndSecond(getAudio.duration);
} )
 const currentProgess = (currentTime) => {
    const playBar = (400/duration) * currentTime
    currentBar.style.width = playBar.toString() + "px"
 }
getAudio.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(getAudio.currentTime)
    const curFun = createMinuateAndSecond(getAudio.currentTime);
    const curTimeAndDurTime = curFun + " / " + durFun
    playTime.textContent = curTimeAndDurTime;
    currentProgess(currentTime);
})
const createMinuateAndSecond = (both) => {
    const minuate = Math.floor(both/60);
    const second = Math.floor(both%60);
    const addMinuateText = minuate < 10 ? "0" + minuate.toString() : minuate ;
    const addSecondText =  second < 10 ? "0" + second.toString() : second ;
    return addMinuateText + ":" + addSecondText;
}
let musicId = 0;
let isPlaying = false;
getPlayBtn.addEventListener("click", () => {
    const  currentTime2 = Math.floor(getAudio.currentTime);
    isPlaying = true;
    if (currentTime2 === 0) {
        const playBtnList = playListContainerArray[musicId].musicSrc;
        getAudio.src = playBtnList;
        getAudio.play();
        changePauseAndPlay();
    } else {
        getAudio.play();
        changePauseAndPlay();
    }
})
    getPauseBtn.addEventListener("click", () => {
    isPlaying = false;
    getAudio.pause();
    changePauseAndPlay();
 })
 const changePauseAndPlay = () => {
    if (isPlaying) {
        getPlayBtn.style.display = "none";
        getPauseBtn.style.display = "inline";
    } else {
        getPlayBtn.style.display = "inline";
        getPauseBtn.style.display = "none";
    }
 }
getBackBtn.addEventListener("click", () => {
    if ( musicId === 0) {
        return;
    }
    musicId -= 1;
    const backPlay = playListContainerArray[musicId].musicSrc;
    getAudio.src = backPlay;
    getAudio.play();
    isPlaying = true;
    changePauseAndPlay();
})

getNextBtn.addEventListener("click", () => {
    if (musicId === 3) {
        return;
    }
   
   musicId += 1;
   const nextPlay = playListContainerArray[musicId].musicSrc;
   getAudio.src = nextPlay;
   getAudio.play();
   isPlaying = true;
   changePauseAndPlay();
}); 

