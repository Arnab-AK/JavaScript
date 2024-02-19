/*
let js = 'Amazing';
console.log(10-5+20);

console.log('Jonas');
console.log(23);

// Values and Variables {Naming Conventions}

// CamelCase is mostly used
let firstname = "Matilda";
console.log(firstname)

// We can use underscore also
let jonas_matilda = "JM";

// reserve keywords for JavaScript. $ or _ to be put first
let $function = 27

// Some of the fixed value variables
let PI = 3.14159;

// Variables should be in descriptive
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Values and Variables

let country = "Japan";
console.log(country);

let continent = "Asia";
console.log(continent);

let population = 12000000;
console.log(population);
*/

/*
// Data types

// Number
let age = 23;

// String
let name = "Dom";

// Boolean
let fullAge = true;

// Undefined
let children;

// Null

// Symbol

// BigInt


let javascriptIsFun = false;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Dom"); //For string quotes is must

javascriptIsFun = "YES!"; //Dynamic Typing
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); //Type of null is a object

let isIland = false;
console.log(typeof isIland);

let language
console.log(typeof language);

let country = "Japan";
console.log(typeof country);

let population = 12000000;
console.log(typeof population);
*/


/*
// let, const and var
let age = 30;
aga = 31; //Variable can be mutated

const birthYear = 1991;
// birthYear = 1990; //Variable cannot be mutated

// const job; //not legal to put empty variable in const

var job = "Programmer";
job = "Teacher";

lastName = "Moxley";
console.log(lastName);

language = 'Japanese';
const country = 'Japan';
const continent = 'Asia'
const isIland = false;
isIland = true;
*/

/*
// Basic Operators

// Math Operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Blue';
console.log(firstName + ' ' + lastName);

// Assigment Operators
let x = 10 + 5; //15
x += 10 // x = x + 10
x *= 4;
x++
console.log(x)

// Comparison Operator
console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
// Operator Precedence

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5); // Left to right

let x, y;
x = y = 25 - 10 - 5; // Right to left
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
console.log(averageAge);
*/

/*
// Coding Challenge 1
// Write your code below. Good luck! 🙂

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * 2);
const BMIJohn = massJohn / (heightJohn * 2);

console.log(BMIMark, BMIJohn);

const markHeigherBMI = BMIMark > BMIJohn;
console.log(markHeigherBMI)
*/


/*
// String, Template Literals

const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 2000;
const year = 2024;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(jonasNew)

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines \n\
');

console.log(`String
with
multiple
lines`);
*/


/*
// If-else

const age = 15;
// const isOldEnough = age >= 18;

if(age >= 18) {
    console.log('Sarah can start driving');
} 
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years`);
}

const birthYear = 2009;

let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/