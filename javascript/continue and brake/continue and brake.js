// continue and brake

// how to use continue 
// use in for loop 
let comstomer = [
    {name: "paneiphyu", email: "paneiphyu@gmail.com", gender: "female"}, // vip member
    {name: "samsouta", email: "samsouta@gmail.com", gender: "male"},     // =
    {name: "eieiphwe", email: "eieiphwe@gmail.com", gender: "female"},   // ==
    {name: "santhein", email: "santhein@gmail.com", gender: "male"},     
    {name: "papa", email: "papa@gmail.com", gender: "female"},
    {name: "nyimya", email: "nyimya@gmail.com", gender: "male"},
    {name: "honey", email: "honey@gmail.com", gender: "female"},
]

 for (let i = 0; i< comstomer.length; i++) {
    let forFemale = comstomer[i];
    if (forFemale.gender === "male") {
        continue;
    }
    console.log ("i love you", forFemale.email)
 }

 // how to use brake;
 // use in for loop
 for (let i = 0; i < comstomer.length; i++) {
    let vipMember = comstomer[i];
    console.log ("email is sending now... . ", vipMember.email)
    if (i === 3) {
        break;
    }
 }

 // use continue in while loop 
 let i = 0;
 while (i< comstomer.length) {
     let forWomen = comstomer[i]
     i++;// exit
    if (forWomen.gender === "male") {
        continue;
    }
    console.log ("time is coming now... ", forWomen.email)
 }

 // use brake in while loop

 while (i < comstomer.length) {
    let importantPerson = comstomer[i];
    console.log ("welcome VIP member", importantPerson.email)
    i++;
    if (i === 3) {
        break;
    }
 }