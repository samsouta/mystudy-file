const imageOrg = document.getElementsByClassName ("image")[0];
const getBtn = document.getElementById ("btn");
const imageOrg2 = imageOrg.src;
const arrayImage = [
    "https://images.unsplash.com/photo-1650289649041-3ab743c7530b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1648411070498-5e93a44c34a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1650304189770-8ead05ba60db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1650315185350-d2ebac768cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1650338242952-a7b777484cd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
]
let counter = 0;
const clickBtn = () => {
    const slideImage = arrayImage[counter];
    if (counter === 5) {
        counter = 0;
       imageOrg.src = imageOrg2;
       return counter;

    }
    imageOrg.src = slideImage;
    counter += 1;
}
// change color function
const clickBtn2 = () => {
    getBtn.style.backgroundColor = "red" 
}
// event click
getBtn.addEventListener("click", clickBtn);
getBtn.addEventListener("click", clickBtn2);