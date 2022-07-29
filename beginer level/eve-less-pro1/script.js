const getText = document.getElementsByClassName ("form-control")[0];
let spanId = 1;
const runFunction = (event) => {
    const textValue = event.target.value
    const valueMainContainer = document.getElementsByClassName ("valueMainContainer")[0]
    const valueContainer = document.createElement ("div");
    valueContainer.classList.add("valueContainer");
    const valueDiv = document.createElement("div");
    const lineFunction = () => {
        const lineExit = valueDiv.classList.contains("lineIn")
        if (lineExit) {
            valueDiv.classList.remove("lineIn")
        } else {
            valueDiv.classList.add("lineIn");
        }
    }
    valueDiv.addEventListener("click", lineFunction)
    const createSpan = document.createElement ("span");
    valueDiv.classList.add ("spanClass")
    const createI = document.createElement ("i");
    createI.classList.add ("fa-solid", "fa-trash-can");
    const deleteAll = () => {
        valueContainer.remove();
    }
    createI.addEventListener("click",deleteAll)
    createSpan.id = spanId;
    const spanNumber = spanId.toString() + ". " + textValue
    createSpan.append (spanNumber);
    valueContainer.append(valueDiv, createI)
    valueMainContainer.append(valueContainer);
    valueDiv.append(createSpan);
    const clickSpan = () => {
        const underExit = createSpan.classList.contains ("underline")
        if (underExit) {
            createSpan.classList.remove ("underline");
        } else {
            createSpan.classList.add ("underline")
        }
    }
    createSpan.addEventListener ("click",clickSpan)
    getText.value = "";
    spanId += 1;
}
getText.addEventListener ("change", runFunction )