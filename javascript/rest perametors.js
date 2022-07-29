// Rest parameters
// what is rest parameters?
// rest parameter is function feautre just use in function
// syntax is (...parameter)

// while not use rest
const caculate = (x,y) => {
    return total = x + y
}
caculate (1,2);  // just add 2 element 

// while use Rest
const caculate = (...paramet) => {
    return (paramet);
}
caculate (1,2,3,4,5,6,7,8);  // output like array [1,2,3,4,5,6,7,8]

// use with for loop
const caculate = (...paramet) => {
    let addNum = 0;  // parmet = [2,2,2]
    for (let i = 0; i < paramet.length; i++) {
         addNum += paramet[i]
    }
    return addNum;
}
 caculate (2,2,2);
 caculate (3,5,67,56,6565,);


