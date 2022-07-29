const testCollect = document.getElementsByTagName ("body"); 
const bodyElement = testCollect[0];

 const getElement = document.createElement ("h1")
const textNote = document.createTextNode ("welcome my world")
getElement.appendChild(textNote);

bodyElement.appendChild(getElement);

const readElement = document.getElementsByTagName ("h1")[0];
read this "console.log (", readElement.textContent)

readElement.textContent = "welcome my website"
console.log ("update this ", readElement.textContent);

readElement.remove();



const parantDiv = document.createElement ("div")
parantDiv.classList.add("parant", "mother")
parantDiv.classList.remove("mother");

const childOneDiv = document.createElement ("div")
childOneDiv.append("child one");
childOneDiv.classList.add ("child", "baby")
childOneDiv.classList.remove ("baby");

const childTwoDiv = document.createElement ("div")
childTwoDiv.append("child two");
childTwoDiv.classList.add ("child", "baby")
childTwoDiv.classList.remove ("baby");

parantDiv.append (childOneDiv, childTwoDiv);
bodyElement.append (parantDiv);

const textClass = document.getElementsByClassName ("text-style")[0]
console.log ("read width ", getComputedStyle(textClass).width)
console.log ("read width ", getComputedStyle(textClass).height)
console.log ("read width ", getComputedStyle(textClass).backgroundColor);


