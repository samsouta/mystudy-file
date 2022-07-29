/* Conditionals Statment */
let num1 = 2;
let num2 = 5;

if (num1 === 5) {
    num2 += 6 // no run
} // false
if (num1 < 3) {
    num2 += 2 //run
} //ture

if ( num1 > 4) {    // false
    num2 += 10
} else {            // run
    num2 -= 3
}

if (num1 < 5) {
    num2 += 1   
} else {
    num2 -= 2
}

if ( num1 === 3 ) {
    num1++
} else if (num1 > 1 ) {
    num2--
} else {
    num2 += 1
}


if ( num1 === 3 ) {
    num1++
} else if (num1 > 4 ) {
    num2--
} else {
    num2 += 1
}

if ( num1 === 3 ) {
    num1++
} else if (num1 > 4 ) {
    num2--
} else if (num1 > 5 ) {
    num2--
} else if (num1 > 1 ) {
    num2++
} else {
    num2 += 1
}

/* conditsional statment */
// switch 


let num1 = 2;
let num2 = 0

switch ( num1 ) {
    case 2:
        num1 += 1
        break;
    case 1:
        num2 += 2
        break;
    default:
        num2 += 3
}
