/* build in method and properties */
// string
let textString = "Welcome My World"
// want to large font
textString.toUpperCase();
// want ot lower font 
textString.toLowerCase();
// want to how much index
textString.length;
// want to know index
textString.indexOf("e");


/* number */
let num = "10";   // num is string
/* how to make number*/
let restult = parseInt(num,10);
let num1 = 10;    // num1 is number
/* how to change to string*/
num1.toString();

/* object */
let memberData = {name: "sithumin", age: "18", email: "sithumin@gmail.com"}
/* how to output object key */
Object.keys(memberData);
/* how to output object value */
Object.values(memberData);
/* how to check key or properties in object */
memberData.hasOwnProperty ("name") // it has output true
memberData.hasOwnProperty ("gender") // not have output false


/* Array */

let citys = ["taunggyi", "mandalay", "yangon", "pinlong"]

/* want to how much index */
citys.length // 4
/* want to last elememt  */
citys[citys.length - 1]  // last elememt  "pinlong"
/* how to add new elememt in array */
citys.push ("japan"); 
/* how to remove last elememt  */
citys.pop (); 
/* if don't know index just know elememt */
citys.indexOf ("mandalay") // 1
citys.indexOf ("US")   // -1
/* splice */
citys.slice (0,3) // output  ["taunggyi", "mandalay", "yangon"]
/* how to removed elememt */
citys.splice (0,3);  
/* add all  elememt to string */
citys.join ("-")
citys.join ("=")
citys.join (",")
citys.join (".")