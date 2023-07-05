// JavaScript - JavaScript is a lightely weighted interpeted programming language used to make web pages dynamic

// JavaScript was first introduced in 1995 by Brenden Eich
// Variable - It is jus a storage container to store data and access when ever required
// Difference btw var,let,const
// ES5 - var
// ES6 - let, const

// KEY FACTORS TO REMEMBER WHILE USING VARIABLES IN JAVASCRIPT

/**
 * -->>Declaration -----> var name;(This is declaration)
 * -->>Initilization ---> name = "Hemanth"; (This is initilization)
 * -->>ReDeclaration ---> var name ="Bobby"; (This is Re-Declartion)
 * -->>ReInitilization -> name = "Ankit"; (This is Re-Initilization)
 */

// DECLARATION OF VARIABLE USING var keyword:

/**
 * using var keyword we can declare and initilize value later at any point of time
 * We can re-initilize with the existing value in the run time.
 * We can re-Declare the variable using var keyword
 */

var hotel; // Declariation
console.log(hotel); // OUTPUT: Undefined

hotel = "Bhimas"; //Initilization
console.log(hotel) // OUTPUT: Bhimas

var hotel = "Bliss"; // Re-Declaration
console.log(hotel); // OUTPUT: Bliss

hotel = "Saravor"; //Re-Initilization
console.log(hotel); // OUTPUT: Saravor


// DECLARATION OF VARIABLE USING let keyword:

/**
 * Using let key word we can declare and initilize value at any point of time
 * We can re-initilize the value with existing value
 * Re-declaration of variable is not alllowed when declaring the variable with let keyword
 * when we try to re-declare the variable "SyntaxError: Identifier 'station' has already been declared", we will encounter with thois error in console
 */

let station; // Declaration
station = "Fortune kenses"; // Initilization
console.log(station);//Output: Fortune Kenses


station = "Andhra Spice"; //Re-initilization is possible
console.log(station);//Output: Andhra Spice


let station ; //Re-Declaration is not allowed.
station = "Bliss";
console.log(station); //SyntaxError: Identifier 'station' has already been declared





// DECLARATION OF VARIABLE USING let keyword:

/**
 * Using const keyword we should declare and initilize the value at a time
 * It is not allowed to re-declare or re-initilize the values
 */

const names = "Hemanth"; // Declaration and initilization should happen at the same time

const names; // not alowed
names = "Hemanth";//not allowed
console.log(names);// when we try to declare and initilize at different place then we will encounter "Uncaught SyntaxError: Missing initializer in const declaration" error in console.