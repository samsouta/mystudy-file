// local scope vs goabal scope 
// var gobale scope 
// let, const  block scope 

let num1 = 1;  // gobale scrope 
console.log (num1)  // will not cause error 

let sam = 2;
const myName = () => {
    console.log (sam);   // will not cause error
}

const myFunction = () => {
    let num2 = 2;
    const num3 = 3;
    var num4 = 4;
    num5 = 5;
}
console.log (num2) // will cause error
console.log (num3)  // will cause error 
console.log (num4)  // will cause error 
console.log (num5)  // will not cause error 

let gobalNum = 10;

const myFunction2 = () => {
    console.log(gobalNum);  // will not cause error
}

// Block golbal

{
    let numLet = 10; // bock golbal 
    const numConst = 20; // block gobal
    var numVar = 30;  ;// not block golbal
}

 console.log(numLet) // will cause error 
 console.log (numConst) // will cause error 
 console.log (numVar) // will not cause error 


// eg

 let myUserName = () => {
     var sex = "male"
    if (sex === "male") {
        let name = "sithumin"
        const age = "18";
        var nextName = "samsouta"
    }
    console.log(nextName); // will not cause error 
    console.log (name);    // will cause  error  
    console.log (age);      // this also cause error 
    const mynextName = () => {
        console.log(sex); /// will work 
    }
    mynextName();
 }
    myUserName();







