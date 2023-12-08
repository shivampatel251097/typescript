"use strict";
let number1 = 5;
let number2 = 6;
console.log("Sum of a + b = ", number1 + number2);
const FirstName = "Shivam";
const LastName = "Patel";
console.log(`My name is: ${FirstName} ${LastName} `);
const isActive = true;
const isEnabled = false;
console.log("The isctive flag is ", isActive);
console.log("isEnabled flag is ", isEnabled);
printName(FirstName, LastName);
function printName(FirstName, LastName) {
    let FullName = FirstName + LastName;
    console.log(`My name is: ${FirstName} ${LastName} `);
}
//primitive types : object
let course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamental",
    lessonsCount: 10
};
console.log("type of course is", typeof course);
// Defining inline annotation type of an object 
//not a good practice it's just to undestand how types can be defined for object properties
let course1 = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamental",
    lessonsCount: 10,
    author: {
        firstName: 'Shivam',
        lastName: 'Patel'
    }
};
console.log("type of course is", typeof course1);
