// map array
// what is map 
const dataInfor = [
    {name: "santhein", age: "30", gender: "male"},
    {name: "paneiphyu", age: "17", gender: "female"},
    {name: "sithumin", age: "18", gender: "male"},
    {name: "eieiphwe", age: "16", gender: "female"},
]

// add objectElememt not use map
for (let i = 0; i < dataInfor.length; i++) {
    dataInfor[i].booking = [];
}

// add objectElememt while use map
dataInfor.map(addObjectElememt);
const addObjectElememt = (backKye) => {
     backKye.booking = [];
     return backKye;
}

