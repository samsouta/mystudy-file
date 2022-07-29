const inputTap = document.getElementsByClassName("form-control")[0];
const valueCon = document.getElementsByClassName("valueContainer")[0];

let valueId = 1;
const valueFunction = (event) => {
const valueText = event.target.value
const valueDiv = document.createElement("div")
valueDiv.classList.add("valueDiv")
valueDiv.id = valueId;
const spanDiv = document.createElement("div")
spanDiv.classList.add("spanDiv")
const trash = document.createElement("i")
trash.classList.add("fa-solid", "fa-trash")
const spanTap = document.createElement("span")
spanTap.classList.add("spanTap")
spanTap.append(valueId + ". " + valueText)
spanDiv.append(spanTap)
valueDiv.append(spanDiv, trash)
valueCon.append(valueDiv)
inputTap.value = "";
valueId += 1;

// finished A

spanDiv.addEventListener("click", () => {
   const exitLine = spanDiv.classList.contains("line")
    if (exitLine) {
        spanDiv.classList.remove("line")
        return;
    }
    spanDiv.classList.add("line")
})
    // finished B

trash.addEventListener("click", () => {
    valueDiv.remove();
})
}


inputTap.addEventListener("change", valueFunction) // main listener
