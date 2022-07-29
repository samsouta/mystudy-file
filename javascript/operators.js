// operators

/* Arithmetic */
// + (addition)
let num1 = 2;
let num2 = 2;
let num3 = num1 + num2 // num3 = 4

let str1 = "hello";
let str2 = "world"
let str3 = str1 + str2 // str3 = "helloworld"
let str3 = str1 + ("") + str2 // str3 = "hello world"

// - (Subtraction)
let num1 = 4;
let num2 = 2;
let num3 = num1 - num2 // num3 = 2

// * (Multiplication)
let num1 = 5;
let num2 = 10;
let num3 = num1 * num2 // num3 = 50

// / (Division)
let num1 = 6;
let num2 = 3;
let num3 = num1 / num2 // num3 = 2

// % (remainder)
let num1 = 11;
let num2 = 3;
let num3 = num1 % num2 // num3 = 2

// ** (Exponent)
let num1 = 5;
let num2 = 5;
let num3 = num1 ** num2 // num3 = 25


//finished


/* Increment and decrement */

// ++
let num1 = 1;
let num2 = num1 ++ // num2 = 2

// --
let num1 = 1;
let num2 = num1-- // num2 = 0


/* Assignment Operators */

//+=
let num = 1;
num += 5;  // num = 6
``
//-=
let num = 2;
num -= 5;  //num =3

//*=
let num = 3
num *= 3;
// num = 9

// /=
let num = 6;
num /= 3;  // num = 2;

//finished



/* Comparison Operators */
// == vs ===
let num = 5;
num == "5" // output  true
num === "5" // output false

// != vs !== 
let num = 5;
num != "5" // output false
num !== "5"  // output true

// > ( grater than) and < (less than)
let num1 = 2;
let num2 = 3;
num1 > num2 // output false
num1 <num2 // output true

// >= (grater than or equal to) and <= (less than or equal to )
let num1 = 2;
let num2 = 3;
num1 >= num2  // output flase
num1 <= num2  // output true 



/* Logical operators */
let num1 = 5;
let num2 = 10;
// && (and logical operators)
num1 < 5 && num2 > 7 // flase 
num1 > 3 && num2 < 12 // true

// || (or logical operators)
num1 < 3 || num2 > 5 //  true 
num1 > 5 || num2 < 3 //  flase 
num1 <= 5 || num2 >= 10 // true 

// ! (not logical operators)
 ! (num1 === num2) // true 
 ! (num1 < num2) //  false 