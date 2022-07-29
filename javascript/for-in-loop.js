// for in loop  for object
 const costomer1 =  {name: "mgmg", andress: "taunggyi", email: "mgmg@gmail.com", birthDay: "2,5,2005",
 name1: "lala", andress1: "mandalay", email1: "lala@gmail.com", birthDay1: "2,5,2002" }
 // synax
for (let popName in costomer1  ) {
    console.log (popName);
}  // out put only poprity Name or call also key 


for (let popName in costomer1  ) {
    console.log (costomer1[popName]);
}  // out put popreity name and value or key or value 