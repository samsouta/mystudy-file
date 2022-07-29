// dimensional array
// what is dimensional array ?
// also call (2D) // array is also call (1D)
const array1D = [1, 2, 3, 4] // call (1D)

array1D[0] // 1     // receive array or (1D)
array1D[1] // 2
array1D[2] // 3
array1D[3] // 4

const array2D = [ [1,2], [3,4], [5,6] ] // call (2D) or dimensional array

array2D[0] // [1,2] //  receive dimensional array  or (2D)
array2D[1] // [3,4] 
array2D[2] // [5,6]


// how to use (2D) with loop 

for (let i = 0; i < array2D.length; i++) {
  let currentArray = array2D[i];  // [1,2]
  for (let j = 0; j < currentArray.length; j++) {
    let currentElement = currentArray[j];
    console.log(currentElement);
  }
}