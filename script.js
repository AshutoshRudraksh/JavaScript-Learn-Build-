// console.log("Script js is working")
// console.error("error")
// console.warn("warn")

// // single line comment

// /*
// multiple line comment
// */

// // variables
// let name = "John"
// const age = 20
// const isStudent = true
// // using variables in console
// console.log(`${name} is ${age} years old and is a student: ${isStudent}`)

// // user input backend side using npm(node package manager) using prompt function
// // $ npm init -y (to create a package.json file)
// // $ npm install prompt-sync (to install the prompt-sync package to use prompt function)
// const prompt = require("prompt-sync")() // to use prompt function
// const v = prompt("Enter your name: ")
// console.log(v)

// // datatypes
// /*
// string, "",'',``
// number, //is a numeric data type of all kind of numbers like 1,0.3,1.23e3,0x123,0b1010,0o123
// boolean, //is a logical entity and can have two values: true or false
// undefined //is a condition where an expression does not have a correct value, although it is syntactically correct
// null, //same as undefined but is a condition where an expression does not have a correct value, although it is syntactically correct
// object, //is a collection of key-value pairs
// symbol, //is a unique and immutable primitive value and is often used as an identifier for object properties
// bigint //is a numeric data type that can represent integers larger than 2^53 - 1
// */

// // variable declaration
// var namexyz = "John" // var mutable variable and is function scoped (can be accessed from any function)
// let z = 10 // let is mutable & block scoped (can be accessed from any block)
// z = 20 // reassigning the value of z
// const x = 30 // const is immutable & block scoped (can be accessed from any block)
// x = 40 // reassigning the value of x will throw an error

// // type of variable
// console.log(typeof namexyz)
// console.log(typeof z)
// console.log(typeof x)

// // dynamic typing --> (no need to declare the type of the variable) Note this is not a good practice
// let y = 10
// y = "Hello"
// console.log(typeof y)

// // type conversion
// let a = 10
// // dynamic typing
// let b = "10"
// console.log(a + b)

// // type conversion
// let c = 10
// let d = "10"
// console.log(c + d)

// // type conversion is weired in js it will convert the type of the variable to the type of the other variable
// // how this happens? --> js is a dynamically typed language so it will convert the type of the variable to the type of the other variable
// // again who decides which type to convert to? --> js will convert the type of the variable to the type of the other variable based on the operation and the type of the variable
// // for example 
// const x1 = 10
// const y1 = true
// console.log(x + y) // 11 (10 + 1 = 11) (number + boolean = number)
// // 10 + true = 11 (10 + 1 = 11)

// const a1 = "hello"
// const b1 = false
// console.log(a1 + b1) // hellofalse (string + boolean = string)
// // hellofalse

// const c1 = "234"
// const d1 = 10
// console.log(c1 * d1) // 2340 (234 * 10 = 2340)
// // 2340 

// const e1 = "jello"
// const f1 = 10
// console.log(e1 - f1) // NaN (jello - 10 = NaN	)
// // NaN is a special value in js that represents a value that is not a number

// const g1 = "hello"
// const h1 = 10
// console.log(g1 / h1) // NaN (hello / 10 = NaN)
// // NaN is a special value in js that represents a value that is not a number


// // how to avoid this type conversion?  
// // do type conversion explicitly constructor functions
// const i1 = 10.234
// const j1 = "10"
// console.log(i1 + Number(j1)) // 1010 (number + string = string)
// // 20

// // note you can use parseInt, parseFloat, Number, toString, etc. to convert the type of the variable
// // parseInt is used to convert a string to a number example: parseInt("1023px") = 1023  (it will ignore the px and only parse the number) 
// console.log(parseInt("1023px")) // 1023
// // parseFloat is used to convert a string to a float number example: parseFloat("10.43") = 10.43
// console.log(parseFloat("10.43")) // 10.43
// // Number is used to convert a string to a number example: Number("1023") = 1023
// console.log(Number("1023")) // 1023
// // toString is used to convert a number to a string example: (1023).toString() = "1023"
// console.log((1023).toString()) // "1023"
// // toBoolean is used to convert a string to a boolean example: toBoolean("true") = true
// console.log(toBoolean("true")) // true

// // comparison operators
// // ==, ===, !=, !==, >, <, >=, <=
// // loosely and strictly equal to

// // loosely equal to checks the value of the variable
// console.log(1 == "1") // true (loosely equal to)
// console.log(1 === "1") // false (strictly equal to)
// console.log(1 != "1") // false (loosely not equal to)
// console.log(1 !== "1") // true (strictly not equal to)
// console.log(null == undefined) // true (loosely equal to) very important to know that null and undefined are equal to each other but not to anything else 
// console.log(null == false) // false (null is not equal to false) why? because null is an object and false is a boolean 
// console.log(undefined == false) // false (undefined is not equal to false) why? because undefined is not a boolean 
// console.log(""==[]) // true (loosely equal to) because empty string and empty array are equal to each other 
// console.log(""==[[]]) // true (loosely equal to) because empty string and empty array are equal to each other 
// console.log(""==[""]) // true (loosely equal to) because empty string and empty array are equal to each other 
// console.log(""==[0]) // false (loosely equal to) because empty string and 0 are not equal to each other 
// console.log(""==[null]) // false (loosely equal to) because empty string and null are not equal to each other 
// console.log(""==[undefined]) // false (loosely equal to) because empty string and undefined are not equal to each other 
// console.log(""==[false]) // false (loosely equal to) because empty string and false are not equal to each other 
// console.log(""==[true]) // false (loosely equal to) because empty string and true are not equal to each other 
// console.log(""==[NaN]) // false (loosely equal to) because empty string and NaN are not equal to each other 

// // strictly equal to --> checks the value and the type of the variable
// // always use === for comparison operators for strict equality
// console.log(""===[]) // false (strictly equal to) because empty string and empty array are not equal to each other 
// console.log(""===[[]]) // false (strictly equal to) because empty string and empty array are not equal to each other 
// console.log(""===[""]) // false (strictly equal to) because empty string and empty array are not equal to each other 
// console.log(""===[0]) // false (strictly equal to) because empty string and 0 are not equal to each other 
// console.log(""===[null]) // false (strictly equal to) because empty string and null are not equal to each other 
// console.log(""===[undefined]) // false (strictly equal to) because empty string and undefined are not equal to each other 
// console.log(""===[false]) // false (strictly equal to) because empty string and false are not equal to each other 
// console.log(""===[true]) // false (strictly equal to) because empty string and true are not equal to each other 
// console.log(""===[NaN]) // false (strictly equal to) because empty string and NaN are not equal to each other 

// // logical operators
// // &&, ||, !
// // && --> and operator
// console.log(true && "hello") // hello (true is ignored)
// console.log("hello" && false) // false (false is ignored)
// console.log("" && true) // "" (empty string is ignored)
// console.log(false && false) // false
// console.log(null && false) // null (false is ignored)
// console.log(undefined && false) // undefined (false is ignored)
// console.log(NaN && false) // NaN (false is ignored)
// console.log(0 && false) // 0 (false is ignored)
// console.log(1 && false) // 1 (false is ignored)
// console.log(true && false) // false
// console.log(false && true) // false

// // || --> or operator
// console.log(true || true) // true
// console.log("hello" || false) // hello (false is ignored)
// console.log("" || true) // true
// console.log(false || false) // false
// console.log(null || false) // false
// console.log(undefined || false) // false 
// console.log(NaN || false) // false
// console.log(0 || false) // false
// console.log(1 || false) // 1
// console.log(true || false) // true
// console.log(false || true) // true

// // ! --> not operator
// console.log(!true) // false
// console.log(!false) // true
// console.log(!false && "hello") // hello (false is ignored)
// console.log(!0) // true
// console.log(!1) // false
// console.log(!null) // true 
// console.log(!undefined) // true (undefined is a special value in js that represents a value that is not defined)
// console.log(!NaN) // true (NaN is a special value in js that represents a value that is not a number)
// console.log(!"") // true  

// // using boolean functions
// console.log(Boolean(2) && Boolean("hello")) // true
// console.log(Boolean(false) && Boolean("hello")) // false
// console.log(Boolean(0) && Boolean("hello")) // false
// console.log(Boolean(1) && Boolean("hello")) // true
// console.log(Boolean(null) && Boolean("hello")) // false
// console.log(Boolean(undefined) && Boolean("hello")) // false
// console.log(Boolean(NaN) && Boolean("hello")) // false
// console.log(Boolean("") && Boolean("hello")) // false
// console.log(Boolean("hello") && Boolean("hello")) // true


// // conditionals
// // if, else, else if, switch, case, default
// // if statement
// if (condition) {
//     // code to execute if condition is true
// }

// // else statement
// if (condition) {
//     // code to execute if condition is true
// }
// // you can also use without curly braces
// if (condition)
//     console.log("condition is true")
// else
//     console.log("condition is false")
//     console.log("condition is false") // this will not be considered as part of the if statement without curly braces 

// // turnery operator
// // condition ? true : false
// console.log(condition ? "condition is true" : "condition is false")

// // switch statement
// switch (expression) {
//     case value1:
//         // code to execute if expression is value1
//         break
//     case value2:
//         // code to execute if expression is value2
//         break
// } 
// // be careful with the break statement
// // if you don't use break statement, the code will fall through to the next case

// // let do arrays now 
// const arr = [1, 2, 3, 4, 5]
// const arr2 = new Array(1, 2, 3, 4, 5) // this is a constructor function
// const arr3 = Array.from(1, 2, 3, 4, 5) // this is a static method
// const arr4 = Array.of(1, 2, 3, 4, 5)
// const arr5 = Array.isArray(arr) // this is a static method
// const arr6 = arr.length // this is a property
// const arr7 = arr.push(6)
// const arr8 = arr.pop() // this is a method to remove the last element of the array
// const arr9 = arr.shift() // this is a method to remove the first element of the array
// const arr10 = arr.unshift(0) // this is a method to add an element to the beginning of the array
// const arr11 = arr.splice(1, 2) // this is a method to remove elements from the array

// // resize the array
// arr2[arr2.length + 4 ] = 6 // this will add 6 to the end of the array with <undefine> filled  before 6 and arr2.length will be 9  

// // destructuring the array
// const [a, b, c, d, e] = arr
// console.log(a, b, c, d, e)

// // destructuring the array with rest operator
// const [a, b, ...rest] = [1, 2, 3, 4, 5] 
// console.log(a, b, rest) // output: 1 2 [3, 4, 5]

// // copying the array that is referenced by the original array
// const q1 = [1, 2, 3, 4, 5]
// const q2 = q1

// q2.push("hello")
// console.log(q1,q2) // output: [1, 2, 3, 4, 5, 'hello'] [1, 2, 3, 4, 5, 'hello'] both are referenced by the same array

// // copying the array that is not referenced by the original array
// const q3 = [1, 2, 3, 4, 5]
// const q4 = [...q3]
// q4[0] = 10
// console.log(q3) // output: [1, 2, 3, 4, 5]
// console.log(q4) // output: [10, 2, 3, 4, 5]


// // while loop
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// // do while loop
// do {
//     console.log(i)
//     i++
// 	break;
// } while (i < 10)

// while (condition) console.log(i) // this is a while loop without curly braces


// // for loop 
// // note --> let is used to declare a block scoped variable

// for (let i = 0; i < 10; i++) { 
//     console.log(i)
// 	break/continue; // break is used to break the loop and continue is used to continue the loop
// }

// // note --> of is used to iterate over the array and not "in"
// for (let value of array) {
//     console.log(value)
// }

// // using entries(specific method to iterate over the array) method to iterate over the array
// for (let [index, value] of array.entries()) {
//     console.log(index, value)
// }

// // Object in js 
// // note json is a subset of js object and it is a way to store data in a key-value pair
// const obj = {
//     name: "John",
//     age: 20,
//     isStudent: true
// 	sayHello: function() {
// 		console.log("Hello")
// 	}
// }

// // accessing the properties of the object
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.isStudent)
// obj.sayHello()

// // deleting the properties of the object
// delete obj.name
// console.log(obj)

// // accessing the properties of the object using dot notation or bracket notation
// console.log(obj.name)
// console.log(obj["name"])

// //modifying the properties of the object using dot notation or bracket notation
// obj.name = "Jane"
// console.log(obj.name)
// obj["name"] = "Jane"
// console.log(obj["name"])

// // adding the properties of the object using dot notation or bracket notation
// obj.name = "Jane"
// console.log(obj.name)
// obj["name"] = "Jane"
// console.log(obj["name"])

// // deleting the properties of the object using dot notation or bracket notation
// delete obj.name
// console.log(obj)

// // Object.keys() method to get the keys of the object
// console.log(Object.keys(obj))

// // Object.values() method to get the values of the object
// console.log(Object.values(obj))

// // Object.entries() method to get the keys and values of the object
// console.log(Object.entries(obj))


// // objects inside of objects
// const obj2 = {
//     name: "John",
//     age: 20,
//     isStudent: true,
// 	// nested object
//     address: {
//         city: "New York",
//         state: "NY"
//     }
// }

// // accessing values of the nested object
// console.log(obj2.address.city)
// console.log(obj2.address.state)

// // using in operator to check if a property exists in the object
// console.log("name" in obj2)
// console.log("age" in obj2)

// // using in operator to check if a property exists in the object
// for (let key in obj2) {
//     console.log(key)
// }
 
// // adding two objects
// const obj3 = {
//     name: "John",
//     age: 20,
//     isStudent: true
// }
// const obj4 = {
//     name: "Jane",
//     age: 21,
//     isStudent: false
// }
// const obj5 = { ...obj3, ...obj4 }
// console.log(obj5)

// // merging two objects
// const obj6 = { ...obj3, ...obj4 }
// console.log(obj6)
// // they will be referenced by the same object and changes will be reflected in both objects

// // using object.assign() method to merge two objects
// const obj7 = Object.assign({}, obj3, obj4)
// console.log(obj7)
// // they will be referenced by the same object and changes will be reflected in both objects



// // set in js 
// const set = new Set([1, 2, 3, 4, 5])
// console.log(set)

// // add an element to the set
// set.add(6)
// console.log(set)

// // remove an element from the set	
// set.delete(6)
// console.log(set)

// // check if an element exists in the set
// console.log(set.has(6))

// // clear the set
// set.clear()
// console.log(set)	

// // coverting set to array
// const setToArr = Array.from(set)
// console.log(setToArr)

// // using spread operator to copy the set
// const setToArr2 = [...set]
// console.log(setToArr2)

// // map in js 
// const map = new Map([["name", "John"], ["age", 20], ["isStudent", true]])
