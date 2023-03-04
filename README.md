# JS_brush-up

## Variable declaration 

```js 
// Var (old standard) 
var foo = 'bar'; 
// Var declarations are globally scoped or function scoped. 
// They can be redeclared and reassigned. 

// Let (block scoped) 
let baz = 'qux'; 
// Let declarations are block scoped. 
// They cannot be redeclared but can be reassigned. 

// Const (read-only block scoped) 
const qux = 'quux'; 
// Const declarations are block scoped and read-only. 
// They cannot be redeclared or reassigned. 
``` 

```js 
// Var variable hoisting 
console.log(foo); // undefined 
var foo = 1; 

// The above is equivalent to: 
var foo; 
console.log(foo); // undefined 
foo = 1; 
```

## Types
### Primitive
1. String
2. Number
3. Boolean
4. Undefined
5. Null

Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object

6. bigint
7. symbol
### Non-Primitive
8. object


```js 
let foo = 42.321 
foo = Number.MIN_VALUE 
foo = Number.MAX_SAFE_INTEGER //  2^53 − 1 
foo = Infinity; 
foo = -Infinity 

foo = "56" //string 
foo = 'Apples' 
foo = false || true // boolean 
foo = undefined // undefined should not be redefined like this line 
foo = null // typeof null // Returns "object" (kind of a bug in JavaScript) 
foo = 391821n //bigint 

let arr = [1, 2, 3, 4, 5]; 

let symbol1 = Symbol('symbol'); 
var name = {first:"Jane", last:"Doe"}; 

let [a, b, ...rest] = arr; // destructure the array into variables 

let {first, last} = name; // destructure the name object into variables 

foo = undefined; // destroying the variable 
delete foo; // another way to destroy the variable 
```

---
## String
```js
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line

var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work // strings are immutable
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters , [ ...abc] 
128.toString(16);               // number to hex(16), octal (8) or binary (2)
let binaryNumber = 0b101010 
let first:number = 123; // number 
let second: number = 0x37CF; // hexadecimal
let third:number=0o377 ; // octal
let fourth: number = 0b111001;// binary 
// toExponential() Returns the exponential notation in string format.
// toFixed() Returns the fixed-point notation in string format.
// toPrecision() Returns the string representation in exponential or fixed-point to the specified precision.
// toString() Returns the string representation of the number in the specified base.
// valueOf() Returns the primitive value of the number.
// Convert asci to charcter
String.fromCharCode(98)   ->   'b'
// caesar cypher (for lower case letters)
String.fromCharCode(((letter.charCodeAt(0) - 'a'.charCodeAt(0) + d) % 26) + 'a'.charCodeAt(0))
```

---

## Array

Array creation:

```js
let arr = []; // Empty array
let arr = [1, 2, 3]; // Array with values
let fruits = ['Apple', 'Banana', 'Orange'];
let arr = new Array(100).fill(0);
let newImg = Array(2).fill(null).map((e, i)=> Array(4).fill(i));
```

Array access:

```js
fruits[1]; // Get element at index 1 ('Banana')
fruits[fruits.length - 1]; // Get last element ('Orange')
fruits[3]; // Out of bounds, returns undefined
```

Useful methods:

```js
fruits.push('Strawberry'); // Add to end
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning
fruits.unshift('Mango'); // Add to beginning
fruits.slice(1, 3); // Extract slice from index 1 to 3 // ['Banana', 'Orange']
fruits.sort(); // Sort alphabetically
fruits. reverse(); // Reverse order
fruits.indexOf('Banana'); // Get index of value

arr.concat(otherArr); // Concatenate arrays
arr.includes(value); // Check if value exists
arr.join(); // Join all elements into a string
arr.splice(start, deleteCount, ...items); // 
fruits.splice(1, 1, 'Kiwi', 'Peach');
//fruits = ['Apple', 'Banana', 'Orange'];
// Removes 2 elements starting at index 1 ('Banana', 'Orange')
// And inserts 'Kiwi' and 'Peach' at index 1
// fruits is now ['Apple', 'Kiwi', 'Peach']

arr.sort((a, b) => a - b); // Sort numbers ascending
```
---
## If
```js
if (age >= 5 && age <= 19) {
  console.log("Eligible");
} else if (age < 25) {
  console.log("Maybe eligible");
} else {
  console.log("Not eligible");
}
```
```js
// Difference between “ == “ and “ === “ operators
// compares values | compares values and types

(3 == "3") // true
(3 === "3") // false

NaN != NaN // the only value in javascript that is not equal to itself

```
---


## Loop
```js
for (let i = 0; i < 5; i++) {
console.log(i);
}// Logs 0 1 2 3 4

for(var a = 1, b = 10; a*b; a++, b--) {
output.innerHTML += new Array(a*b).join('*') + '<br/>';
}
// This loop decrements b while incrementing a, and renders a*b asterisks on each line.
// It continues until a*b equals 0, creating a triangle shape of asterisks.

while (count < 10) {
    count++;
    if (count === 5) {
        continue; // Skip to next iteration
    }
    if (count > 7) {
        break; // Exit loop entirely
    }
    console.log(count);
}
// Logs 1 2 3 4 6 7

for (const value of ['a', 'b', 'c']) {
console.log(value);
}
// Logs 'a' 'b' 'c'

for (const key in { foo: 'bar' }) {
console.log(key);
}
// Logs 'foo'

for (const [key, value] of new Map([['a', 1], ['b', 2]])) {
    console.log(`Key: ${key} Value: ${value}`);
}
// Logs
// Key: a Value: 1
// Key: b Value: 2
```
---
##Function
```js
function foo(x, y = 4, ...z){
  // y has a default value
  // z takes the rest of the arguments in an arra (rest parameters)
  console.log(x)
  console.log(y)
  console.log(z)
}
foo(3)
foo(1,2,3,4,5)
```
## Map(): 
You could use object as a hashtable but instead use Map() 
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 
```js
	const map1 = new Map();
	const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]) 
	map1.set('a', 1);  map.set(letter, map.get(letter) + 1 || 1) 
	map1.get('b') 
	Map1.size 
	map1.delete('c') 
	Map1.has('a') 
//Don’t set key,value like this with map.  wrongMap['bla'] = 'blaa' 
	for (const [key, value] of myMap)  
	Mymap.keys()/
	Mymap.values() 
	Mymap.entries() 
	map.forEach((val, key) => { console.log(val);}   // => 1, 2, 3, 4 
//   }); 
```

## Set 
Js has set() like python
```js 
	Let s = new Set() 
	let set = new Set([1, 2, 3, 2, 1]); 
	s.has('a')   // returns true or false 
	s.add('b') // adds 
	s.size // returns the size  * just like .length but sets don't have it 
s.values() // returns an itterable 
```