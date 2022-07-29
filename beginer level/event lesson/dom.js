/* document object model */
/* create and read and update and delete */
/* create */
const getElement = document.createElement ("h1")
const textNote = document.createTextNode ("welcome my world")
getElement.appendChild(textNote);
const testCollect = document.getElementsByTagName ("body")  // html collection
const bodyElement = testCollect[0];
bodyElement.appendChild(getElement);

/* read */

const readElement = document.getElementsByTagName ("h1")[0];
console.log ("read this ", readElement.textContent)

/* update */
readElement.textContent = "welcome my website"
console.log ("update this ", readElement.textContent);

/* delete */
const readElement = document.getElementsByTagName ("h1")[0];
readElement.remove();

/* useful dom method and properties */


/*  <div class="parant" >
        <div class="child" >child one</div>
        <div class="child" >child two </div>
    </div>
 */
    const testCollect = document.getElementsByTagName ("body")[0]

    const parantDiv = document.createElement ("div")

    const childOneDiv = document.createElement ("div")
    childOneDiv.append("child one");

    const childTwoDiv = document.createElement ("div")
    childTwoDiv.append("child two");

    parantDiv.append (childOneDiv, childTwoDiv);
    testCollect.append (parantDiv);


    // read external css
   const textClass = document.getElementsByClassName ("text-style")[0]
console.log ("read width ", getComputedStyle(textClass).width)
console.log ("read width ", getComputedStyle(textClass).height)
console.log ("read width ", getComputedStyle(textClass).backgroundColor);





