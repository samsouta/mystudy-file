// call back 
// syntax
// /* synchronous code */ is not waiting finished code
// /* asynchronous code */ waiting finished code 
// const userData = (callback) => {
//     console.log (" taking data in sever...")
//     /* synchronous code */   // not waiting finished code
//     /* synchronous code */     
//     /* synchronous code */
//     /* synchronous code */
//     /* synchronous code */
//     console.log ("finished data in sever")
//      callback();
// }

// const outerShowData = () => {    // gobale scope
//     const showData = () => {     // local scope
//         console.log ("showing in you profile ....")
//     }
//     userData(showData);
// }


const userData = (callback) => {
    console.log("taking data in sever....")

    // waiting taking data
    // waiting taking data
    // waiting taking data
    // waiting taking data
    console.log("finished data in sever..")
}

const outerFun = () => { // gobable scope
    const showData = () => { // local scope
        console.log("showing data in you profile...")
    }
}
        