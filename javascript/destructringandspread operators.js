// destructring in ES6 

// syntax in ES6
// use in object

const userData = {
    name: "sithumin", age: "18", email: "sithumin@gmail.com"
}
// before not use destructring 
let name = userData.name;     // don't repeat youself
let age = userData.age;
let email = userData.email;

// after use destructring

const {name, age, email} = userData;  // wow .. too short

console.log (name, age, email);


// also use in array 
// syntax in ES6
// use in array
const userInfor = ["pinlong", "taunggyi", "yangon"]

// before not use destructring 
let city1 = userInfor[0]; // don't rebeat youself
let city2 = userInfor[1];
let city3 = userInfor[2];

// after use destrctring 
const [city1, city2, city3] = userInfor;

const [city1, , city3];

const [city1];
const [city2]

// spread operators (...) ES6
// what is spread operators ?  it is for copies 
// in old javascript 
// syntax  // use in object 
const userData = {
    name: "sithumin", age: "18", email: "sithumin@gmail.com"
}
const user2Data = {
    name: "santhein", age: "18", email: "santhein@gmail.com"
}

const newUserData = Object.assign({}, userData);  // :( this is not simple

// syntax in ES6 
const userData2 = {...userData}   // :) simple


// how to add new element and copy
const userData3 = {user2Data, ...userData};
const userData3 = {...userData, user2Data};

// Array
// syntax  // use in array
const userInfor = ["pinlong", "taunggyi", "yangon"]

// in old javascript 
const copiedInfor = [].concat(userInfor); // not simple 

// in ES6 
const copiedInfor = [...userInfor]; // simple easy 

// also use with element and copy
const copiedInfor = ["mandalay", ...userInfor];
const copiedInfor = [...userInfor, "japan"]


