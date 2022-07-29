/*
notMenber =full Price
sivalMenber = 5% dis
goldMenber = 10% dis
platinumMenber = 15% dis
*/

const originalPrice = 100 ;
let totalPrice = 0 ;
let memberType = "sivalMember"

if ( memberType === "sivalMember" ) {
    totalPrice += 100 * 0.95
} else if ( memberType === "goldMember" ) {
    totalPrice += 100 * 0.90
} else if ( memberType === "platinumMember" ) {
    totalPrice += 100 * 0.85
} else {
    totalPrice = originalPrice
}


const userName1 = "paneiphyu"
const userName2 = "santhein"
let userName3 = "samsouta"
const userName4 = "nyiMya"

switch (userName3) {
    case "santhein":
      userName3 += userName1  
      break;
      case "nyimya":
          userName3 += userName1
          break;
    case "samsouta":
        userName3 += " paneiphyu"
        break;
}

// function 

let num1 = 0;

function samSouta () {
    num1 += 3 * 3;
    num1 *= 2;
    num1 -= 3;
}

// function
// functon decalarion 
// function call  for use it 


const oldName = "sithumin";
let newName = "";
function changeName () {
    newName += " sam" + "souta"
}

// parameter
let logoName = "doctor ";
function costomerName (name) {
    logoName += name 
}
costomerName("paneiphyu");

// Value returnning function

let fatherName = "sithumin"
let motherName = "paneiphyu"

function childName (fatherName, motherName) {
    return fatherName += motherName
}
const babyName = childName (ei, thu)

// ES6 Arrow function 

 const babyName = (dadName, momName) => {
     return dadName += momName
}
babyName ("ei ", "thu");


const personInfor = [
    {name: "mgmg", andress: "taunggyi", email: "mgmg@gmail.com", birthDay: "2,5,2005"},
    {name: "aungaung", andress: "yangon", email: "aungaung@gmail.com", birthDay: "2,5,2003"},
    {name: "lala", andress: "mandalay", email: "lala@gmail.com", birthDay: "2,5,2002"},
    {name: "mama", andress: "bago", email: "mama@gmail.com", birthDay: "2,5,2000"},
    {name: "yuyu", andress: "shan", email: "yuyu@gmail.com", birthDay: "2,5,2001"},
    {name: "panpan", andress: "pinlong", email: "panpan@gmail.com", birthDay: "2,5,2004"},
    {name: "eiei", andress: "ayetaryar", email: "eiei@gmail.com", birthDay: "2,5,2003"},
    {name: "phyuphyu", andress: "usa", email: "phyuphyu@gmail.com", birthDay: "2,5,2007"},
    {name: "phyo", andress: "pairis", email: "phyo@gmail.com", birthDay: "2,5,2008"},

]

// index always stat 0 

personInfor.length

for (let i = 0; i < personInfor.length; i++) {
    let costomerEmail = personInfor[i].email;
    sendMail(costomerEmail);
}

const sendMail = (email) => {
    console.log ("sending now please wait:( ", email)
}



personInfor.push (  {
    name: "sithumin", phoneNumber: 11111, email: "sithumin@gmail.com", dateOfBirth: 2003,
},
{
 name: "paneiphyu", phoneNumber: 22222, email: "paneiphyu@gmail.com", dateOfBirth: 2002,
 },
 {
 name: "santhein", phoneNumber: 33333, email: "santhein@gmail.com", dateOfBirth: 2001,
 },
{
 name: "nyimya", phoneNumber: 44444, email: "nyimya@gmail.com", dateOfBirth: 2004,
 }
 )


 const letter = [
     {
         name: "paneiphyu", age: "18", gentale: "female"
     },
     {
         name: "eieiphyu", age: " 17", gentale: "female"
     },
     {name: "mgmg", andress: "taunggyi", email: "mgmg@gmail.com", birthDay: "2,5,2005"},
    {name: "aungaung", andress: "yangon", email: "aungaung@gmail.com", birthDay: "2,5,2003"},
    {name: "lala", andress: "mandalay", email: "lala@gmail.com", birthDay: "2,5,2002"},
    {name: "mama", andress: "bago", email: "mama@gmail.com", birthDay: "2,5,2000"},
    {name: "yuyu", andress: "shan", email: "yuyu@gmail.com", birthDay: "2,5,2001"},
    {name: "panpan", andress: "pinlong", email: "panpan@gmail.com", birthDay: "2,5,2004"},
    {name: "eiei", andress: "ayetaryar", email: "eiei@gmail.com", birthDay: "2,5,2003"},
    {name: "phyuphyu", andress: "usa", email: "phyuphyu@gmail.com", birthDay: "2,5,2007"},
    {name: "phyo", andress: "pairis", email: "phyo@gmail.com", birthDay: "2,5,2008"},
 ]

 for (let i=0; i < letter.length; i++) {
    let sendName1 = letter[i].name
    let sendName2 = letter[i].name
    switch (sendName1) {
        case "paneiphyu":
            sendLetter(sendName1);
            break;
            default:
    }
 }

 const sendLetter = (name) => {
     console.log ("i love you :) ",name)
 }

 const sendLetter2 = (name) => {
     console.log ("i hate you ", name)
 }