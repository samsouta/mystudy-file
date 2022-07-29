// filter
// use filter in array 

const dataInfor = [
    {name: "santhein", age: "30", gender: "male"},
    {name: "paneiphyu", age: "17", gender: "female"},
    {name: "sithumin", age: "18", gender: "male"},
    {name: "eieiphwe", age: "16", gender: "female"},
]

//syntax
dataInfor.filter(itMale);
const itMale = (arrayElememt) => {
    return arrayElememt.age === "17" && arrayElememt.gender === "female"
}

// or
// just use 1 
dataInfor.filter (arrayElememt => arrayElememt.age === "17" && arrayElememt.gender === "female");


// use in array olny

const num = [1,2,3,4,5]

const checkNum = (numWant) => {
    return numWant > 3;
}

num.filter (checkNum); 