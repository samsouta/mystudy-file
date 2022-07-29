// object 1
//syntax
{}

const name = "samsouat";
const age = 18;
const height = 165;
const dateOfBirth = 2003
const sex = "male"

 const person1 = {
    name: "samsouta",   // key or opersitiy
    age:18,
    height: 165,
    dateOfBirth: 2008,
    sex: "male",
    need: () => {
        alert ("i love you ❤😁")
    }
} 

// dot 
person1.name // key 
person1.need()  // method
//barcket 
person1["name"] // key 
person1["need"]()  // method


//object (part 2)

const person1 = {
    name: "samsouta",   // key or opersitiy
    age:18,
    height: 165,
    dateOfBirth: 2008,
    sex: "male",
    need: () => {
        alert ("i love you ❤😁")
    }
} 

// upgrade with dot

person1.education = "hacker"  // is not work with dynmin

// if dynmix only use bracket 

const userName = "sithumin";
const email = "paneiphyu@gmail.com";

const allInfor = "personInfor " + userName

person1 [allInfor] = email

// object in object


const userName = "paneiphyu";
const personInfor = {
    email: "paneiphyu@gmail.com",
    pass: "mylove",
}
const addAll = "infor" + userName

person1 [addAll] = personInfor

// window object 

alert ("")
console.log ("bye")


