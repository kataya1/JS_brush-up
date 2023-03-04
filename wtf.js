let arr = new Array(3) //initializes an empty array of length 3
arr.push(1, 2) // appends 1 and 2 to the end of the array 
arr.unshift(3) // appends 3 to beggining of the array 
arr.push(undefined) //appends undefined to the end
arr.push(null) // appends null to the end
let arr2 = arr.map((e, i) => i + 1); // a new array arr2 from arr
console.log(arr) // prints:  [ 3, <3 empty slots>, 1, 2, undefined, null ]
console.log(arr2) // prints: [ 1, <3 empty slots>, 5, 6, 7, 8 ]

var arr3 = Array(5).fill(undefined).map((e, i) => i + 1);
console.log(arr3)