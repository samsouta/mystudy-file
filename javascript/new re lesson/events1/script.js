// get body
const getBody = document.getElementsByTagName ("body")[0];
// create element
const createElement = document.createElement ("h1");
// add textNote
const textNote = document.createTextNode ("train you brain");
createElement.appendChild (textNote);
// add element to body
getBody.append (createElement);
// create div
const createDiv = document.createElement ("div");
const createP = document.createElement ("p");
const pText = document.createTextNode ("Since the essay can only include 100 words, plan to only write seven to 10 sentences. Leave one or two sentences for the thesis, four to eight sentences for the body paragraph and one sentence for the conclusion.Ju")
createP.append (pText);
createDiv.append (createP);
getBody.append (createDiv);
// br
const getBtn = document.getElementById ("btn");
const orgImg = document.getElementsByClassName ("childImg")[0];
const orgImg2 = orgImg.src;
console.log (orgImg2);
const tranImg = [
    "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1650424363165-cbe82e6fb37d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1650371569479-c6329015afbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1650508429309-3859b6b43e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1650389176833-8dbb23d0d8f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
]
let counter = 0;
const slideImage = () => {
    const imgArray = tranImg[counter];
    orgImg.src = imgArray;
    if (counter === 5) {
        counter = 0;
        orgImg.src = orgImg2;
        return;
    }
    counter += 1;
}
getBtn.addEventListener ("click", slideImage );
const checkBox = document.getElementsByClassName ("cssBox")[0];
console.log ("read style ", getComputedStyle (checkBox).width);
console.log ("height... ", getComputedStyle (checkBox).height)
console.log ("boxShadow... ", getComputedStyle (checkBox).boxShadow)
console.log ("backgroundColor...", getComputedStyle (checkBox).backgroundColor)
// olA
const olA = document.getElementsByClassName ("olA")[0];
olA.classList.add ("orderListA", "removeA");
olA.classList.remove ("removeA");
//ulA
const ulA = document.getElementsByClassName ("ulA")[0];
ulA.classList.add ("unorderListA", "removeB");
ulA.classList.remove ("removeB");
// // // // 





