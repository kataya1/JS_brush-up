// es6

// vars
let counter = 10;
const constant = 300000
// block scape (other types of scope is globa and function)
// var is global while let is local
var x = 5
let y = 'ES6'

// concatination
x = `this it what it means to concatinate in ${y}`

// object literals
function getBook(title, author) {
    return {
        /* before es6 you would write title: title, author: author.... but if it's the same as input parameter you can shorten it*/
        title,
        author
    };
}

let book = getBook("sapiens", "harari")

// object deconstruction

const list = {
    name: 'shopping list',
    items: ['milk', 'meat'],
    time: '26jan'
}

const { name, time } = list;
console.log(name, time)

// Arrow function
//befor
function say(txt) {
    console.log(txt);
}
// after es6 (args*) => {code block} /// you can remove the parentethis and/or cerlies if it's one parameter or one line
const repreat = txt => console.log(txt) //it implecitly return that line
const point = (x, y) => {
    slope = y / x
    return ` slope's if the second point is "origin" ${slope}`
}
repreat('butchbitch') // invoke it


// Default Parameters

// Array Functions foreach map filter

// Constructor Functions and Classes

// Promise