const songDiv = document.getElementsByClassName("imgContainerA")[0];
const songTapOne = document.getElementsByClassName("imgOneDiv")[0];
const songTapTwo = document.getElementsByClassName("imgTwoDiv")[0];
const songTapThree = document.getElementsByClassName("imgThreeDiv")[0];
const songTapFour = document.getElementsByClassName("imgFourDiv")[0];

const songIconTapOne = document.getElementsByClassName("songIconOne")[0];
const songIconTapTwo = document.getElementsByClassName("songIconTwo")[0];
const songIconTapThree = document.getElementsByClassName("songIconThree")[0];
const songIconTapFour = document.getElementsByClassName("songIconFour")[0];

const auidoTapOne = document.getElementsByClassName("auidoOne")[0];

const musicArray = [
    {musicSrc : "music/songOne.mp3" , name : "ghost"},
    {musicSrc : "music/songTwo.mp3" , name : "circle"},
    {musicSrc : "music/songThree.mp3" , name : "lightSwitch"},
    {musicSrc : "music/songFour.mp3" , name : "xooos"}
]
let isPlaying = false;
let i = 0;
const playSongFunction = () => {
        const ghost = musicArray[i].musicSrc
        auidoTapOne.src = ghost;
        auidoTapOne.play();

        // const songChildTap = document.createElement("div");
        // songChildTap.classList.add ("songChildDiv")
        // const playIconTap = document.createElement("i");
        // playIconTap.classList.add("fa-solid", "fa-volume-high")
        // songChildTap.append(playIconTap)
        // songIconTapOne.append(songChildTap)
        isPlaying = true;
}
const oneFunction = () => {
    i = 0;
    if (isPlaying) {
        auidoTapOne.pause();
        isPlaying = false;
        return;
    }
 playSongFunction()
}
songTapOne.addEventListener("click", oneFunction)

const twoFunction = () => {
    i += 1;
    if (isPlaying) {
        auidoTapOne.pause();
        isPlaying = false;
        i =0;
        return;
    }
    playSongFunction()
}
songTapTwo.addEventListener("click",twoFunction)


const threeFunction = () => {
    i +=2;
    if (isPlaying) {
        auidoTapOne.pause();
        isPlaying = false;
        i =0;
        return;
    }
    playSongFunction()
}
songTapThree.addEventListener("click",threeFunction)


const fourFunction = () => {
    i += 3;
    if (isPlaying) {
        auidoTapOne.pause();
        isPlaying = false;
        i =0;
        return;
    }
    playSongFunction()
}
songTapFour.addEventListener("click", fourFunction)
