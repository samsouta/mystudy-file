const getText = document.getElementsByClassName ("form-control")[0];
const spanContainerDiv = document.getElementsByClassName ("spanContainerDiv")[0]
let idNumber = 1;
const textFunction = (event) => {
    const textValue = event.target.value 
    const spanContainer = document.createElement("div")
    spanContainer.classList.add("spanContainer")
    const spanDiv = document.createElement ("div")
    const lineFunction = () => {
        const lineExit = spanDiv.classList.contains("lineClick")
        if (lineExit) {
            spanDiv.classList.remove("lineClick")
        } else {
            spanDiv.classList.add("lineClick");
        }
    }
    spanDiv.addEventListener("click",lineFunction)
    const createI = document.createElement("i");
    const deleteAll = () => {
        spanContainer.remove();
    }
    createI.addEventListener("click", deleteAll);
    createI.classList.add("fa-solid", "fa-trash");
    const createSpan = document.createElement ("span");  // create span
    createSpan.id = idNumber;
    const allValue = idNumber.toString() + ". " + textValue
    spanDiv.classList.add ("spanClassDiv");  // add span class
    createSpan.append (allValue);   // add textValue to span
    spanDiv.append (createSpan);
    spanContainer.append(spanDiv, createI);
    spanContainerDiv.append(spanContainer);
    getText.value = "";
    idNumber += 1;
}
getText.addEventListener ("change",textFunction)