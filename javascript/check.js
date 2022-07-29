const userInfor = [
    {  email: "santhein@gmail.com", password: "santhein"},
    {  email: "samsouta@gmail.com", password: "samsouta"},
    {  email: "nyimya@gmail.com", password: "nyimya"},
]
const userPersonalData = [
    ["စော်ပစ်ကောင်🥴","ငထန်ကောင်😂"],["မင်းသား😜","paitakhon😘"],["fa pro max🥴","စော်မရှီဘဲfeelသောၐြိုလ်သား😉"]
]

let checkUser1 = () => {
  let user1Mail = userInfor[0].email;
  let user1Pass = userInfor[0].password;
  let checkMenber1A = true;
  while (checkMenber1A) {
    let mailVaue = prompt ("enter your email ")
    if ( mailVaue === user1Mail) {
        alert ("you email is correct..✔✔",) 
        checkMenber1A = false;  
  }
  }
  let checkMenber1B = true;
  while (checkMenber1B) {
    let passValue = prompt ("enter you password")
    if (passValue === user1Pass ) {
        alert ("you password is correct :) ✔✔ ")
        checkMenber1B = false;
    }
  }
  for (let i = 0; i < userPersonalData.length; i++) {
    let userCurrectCode = userPersonalData[i];  // [1111,22222]
    if (i === 1) {
      break;
    }
    for (let j = 0; j < userCurrectCode.length; j++) {
      let userCode = userCurrectCode[j];
      alert (userCode);
    }
  }
}

// member 2
let checkUser2 = () => {
  let user2Mail = userInfor[1].email;
  let user2Pass = userInfor[1].password;
  let checkMenber2A = true;
  while (checkMenber2A) {
    let mailVaue = prompt ("enter your email ")
    if ( mailVaue === user2Mail) {
        alert ("you email is correct...✔✔",) 
        checkMenber2A = false;  
  }
  }
  let checkMenber2B = true;
  while (checkMenber2B ) {
    let passValue = prompt ("enter you password")
    if (passValue === user2Pass ) {
        alert ("you password is correct :) ✔✔ ")
        checkMenber2B  = false;
    }
  }
  for (let i = 1; i < userPersonalData.length; i++) {
    let userCurrectCode = userPersonalData[i];  // [1111,22222]
    if (i === 2) {
      break;
    }
    for (let j = 0; j < userCurrectCode.length; j++) {
      let userCode = userCurrectCode[j];
      alert (userCode);
    }
  }
}

// member 3 
let checkUser3 = () => {
  let user3Mail = userInfor[2].email;
  let user3Pass = userInfor[2].password;
  let checkMenber3A  = true;
  while (checkMenber3A) {
    let mailVaue = prompt ("enter your email ")
    if ( mailVaue === user3Mail) {
        alert ("you email is correct...✔✔",) 
        checkMenber3A = false;  
  }
  }
  let checkMenber3B = true;
  while (checkMenber3B) {
    let passValue = prompt ("enter you password")
    if (passValue === user3Pass ) {
        alert ("you password is correct :) ✔✔ ")
        checkMenber3B = false;
    }
  }
  for (let i = 2; i < userPersonalData.length; i++) {
    let userCurrectCode = userPersonalData[i];  // [1111,22222]
    if (i === 3) {
      break;
    }
    for (let j = 0; j < userCurrectCode.length; j++) {
      let userCode = userCurrectCode[j];
      alert (userCode);
    }
  }
}

let clickBox = () => {
  let checkName = true;
  while (checkName) {
    let checkNameBox = prompt ("what is you name ")
    if (checkNameBox === "santhein") {
      alert ("you name is correct ✔✔")
      checkUser1();
    } 
    if (checkNameBox === "samsouta") {
      alert ("you name is correct ✔✔")
      checkUser2();
    }
    if (checkNameBox === "nyimya") {
      alert ("you name is correct ✔✔")
      checkUser3();
    } else {
      alert ("fuck you ")
    }
     checkName = false;
  }
}








