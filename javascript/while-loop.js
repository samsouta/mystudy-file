// while loop is always not not it
// synax 
while (condition) {
 // body
}


let validNumber = true;

while (validNumber) {
    let proNumber = prompt ("enter you number bewteen 1 and 100")
    let number = parseInt(proNumber, 10)
    // out put number eg. 20 
    if (number > 1 && number < 100) {
        console.log ("entered a number",number)
        validNumber = false; // exit 
    }
}

let num = 1;

while (num < 20) {
    console.log ("my name is samsouta", num)
    num++; // exit
}