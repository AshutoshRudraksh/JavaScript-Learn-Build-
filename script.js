console.log("Script js is working")
console.error("error")
console.warn("warn")

// single line comment

/*
multiple line comment
*/

// variables
let name = "John"
const age = 20
const isStudent = true
// using variables in console
console.log(`${name} is ${age} years old and is a student: ${isStudent}`)

// user input backend side using npm(node package manager) using prompt function
// $ npm init -y (to create a package.json file)
// $ npm install prompt-sync (to install the prompt-sync package to use prompt function)
const prompt = require("prompt-sync")() // to use prompt function
const v = prompt("Enter your name: ")
console.log(v)
