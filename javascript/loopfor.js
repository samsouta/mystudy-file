/* loop */ 

//DRY 
const members = [
   {
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
]


const member1 members[0]= .email
const member2 = members[1].email;
const member3 = members[2].email;
const member4 = members[3].email;

const sendMail = (sendMail) => {
        console.log (sendMail)
}

sendMail(member1);
sendMail(member2);
sendMail(member3);
sendMail(member4);
// don't repeat youself

//loop for

for (let i = 0; i < 5; i++) {
    console.log("hello world")
}

//iteration 1, i = 0   run hello world
//iteration 2, i = 1   run hello world
//iteration 3, i = 2   run hello world
//iteration 4, i = 3   run hello world
//iteration 5, i = 4   run hello world
//iteration 6, i = 5   not run

const members = [
    {
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
 ]

 for (let i = 0; i < members.length; i++) {
    let memberEmail = members[i].email
    let memberDate = members[i].dateOfBirth
    if (memberDate === 2002) {
        sendBirthDay (memberDate);
    } else {
        sendMail(memberEmail);
    }
 }

 const sendMail = (email) => {
    console.log ("email is sending now : ",email)
 }

 const sendBirthDay = (dateOfBirth) => {
    console.log ("for you only i love you :( ",dateOfBirth)
 }

for (let i = 0; i < members.length; i++) {
    let memberNumber = members[i].phoneNumber
    sendNumber(memberNumber);
}

const sendNumber = (phoneNumber) => {
    console.log ("number is sending now : ",phoneNumber)
 }


// eg.  lesson 
// edit it is succecful


let personInfor = [
    {name: "paneipyu", age: "17", relasionship: "sithumin", city: "pinlong"},
    {name: "papa", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "naso", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "yamete", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "ohayo", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "oniichan", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "baka", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "omoshiyoi", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "sugoshi", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "ninji", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "samurai", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "anime", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "tokyo", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "mikey", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "darkken", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "baji", age: "18", relasionship: "sithumin", city: "pinlong"},
    {name: "eieiphyoe", age: "18", relasionship: "sithumin", city: "pinlong"},
    
]

let sendMember = (name) => {
    console.log ("i love my friend :( ", name )
}

let sendVip = (name) => {
    let conVip = true;
  while (conVip) {
    let vipPeople =  prompt ("how much you love me :) ")
    if (vipPeople === "i love you ten thaound") {
        console.log ("i love you too more ",name)
        conVip = false;
    } 
  } 
} 

for (i=0; i< personInfor.length; i++ ) {
    let memberMail = personInfor[i].name
    let memberAge = personInfor[i].age 
    if (memberAge === "17") {
        sendVip (memberMail);
    } else { sendMember (memberMail)}

}
      








