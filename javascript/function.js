//function
// function declartion
// call declared function to use it 

let num1 = 0;
function gusion () {
    num1 += 4**2
}
gusion ();


// parameter
let num1 = 0;
function gusion (number) {
    num1 += number**2
}
gusion (3);  // 9
gusion (5);  // 25
gusion (6);  // 36

let weddingName = "sithumin";

function userName ( name2 ) {
     weddingName += name2
}
userName ("samsouta", " paneiphyu");

// Value returning function 

let fatherName = "sithumin"
let motherName = "paneiphyu"


function childName () {
    return fatherName += motherName;
}
 const = babyName childName ();
// a san
let fatherName = "sithumin"
let motherName = "paneiphyu"

function childName (fatherName, motherName) {
    return fatherName += motherName;
}
 const babyName = childName ("ei", " thu");


// built- in function 
alert ("i love you paneiphyu")
 
// ES6 Arrow function //
 const weBabyName = (faName, moName) => {
     return faName += moName 
}
weBabyName ("ei", "thu");
