// Types


// String
// Number
// boolean
// Undefined
// null
// Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object

// bigint
// symbol 
let foo = 42.321
foo = Number.MIN_VALUE
foo = Number.MAX_SAFE_INTEGER //  2^53 − 1
foo = Infinity;
foo = -Infinity

foo = "56"
foo = false || true
foo = undefined // undefined should not be redefined like this line
foo = null
// typeof null // Returns "object" (kind of a bug in JavaScript)
foo = 391821n //bigint

let symbol1 = Symbol('symbol');


NaN != NaN // the only value in javascript that is not equal to itself


// ========


// Hoisting/
a = 1
let b = a + 2
let a;

// var can be hoisted, but using the variable before it's declaration using let and const causes a reference error
// ========
// Difference between “ == “ and “ === “ operators
// compares values | compares values and types

(3 == "3") // true
    (3 === "3") // false
    // =======
    // Let vs var
    ```let is block-scoped, var is function-scoped
You can't redeclare let variables in the same scope
let variables can't be accessed before they are declared (temporal dead zone)
```
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}
// The output is 3 , 3 , 3
// 3 , 3, 3 because of var  is in the global scope now and didn't create a closure, all timouts are referring to the same, final value of i (3)
// 3 and not 2 because I is increment to be 3 before terminating the loop
// if we used let, 0, 1, 2 | each callback gets its own scope for i 


// =======
// Type Coercion
var x = 3;
var y = "2";
x + y // Returns "32" 
x - y // Returns 1

// All values except false, 0, 0n, -0, “”, null, undefined, and NaN 
if (false || 0 || 0n || -0 || "" || null || undefined || NaN) return x
else return y   //returns y

var x = 220;
var y = "Hello";
var z = undefined;

x || y    // Returns 220 since the first value is truthy

x || z   // Returns 220 since the first value is truthy

x && y    // Returns "Hello" since both the values are truthy

y && z   // Returns undefined since the second value is falsy

// Equality Coercion

x == y
// converts into the same types



// ======
// NaN
// typeof of NaN will return a Number.
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true

// ======
// passed by reference vs value
// Premetive are passed by value while objects are passed by reference
var y = 234;
var z = y; // the assign operator takes the value of y (234) and allocates a new space in the memory and returns the address

y = 10  // z is still equal to 

var obj = { name: "Vivek", surname: "Bisht" }; // base by reference 
var obj2 = obj;
obj["age"] = 21 // obj = obj2 = { name: "Vivek", surname: "Bisht", age: 21 }

// ========
// function 
// ========
function foo(a, b = 3, ...c) {
    // b is called default parameter, c is rest parameter 
    console.log(a, b, c)
}
foo(1, 2, 3, 4, 5) // a = 1, b = 2, c = [3, 4, 5]
    // anonymous function ( function expression rather than function declaration)
    (function (x) {
        return x * x
    })

    // iife - imetiatly invokable function expression 

    (function (x) {
        return x * x
    })(3)  // returns 9

    // higher order functions


// Scopes

// Global Scope
// Local or Function Scope
// Block Scope

// scope chain, is when the variable is not in the local scope so it tries to find it in the outer scopes all the way to the global scope

