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

/*
// Type Conversion and Coercion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 1000);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log('I am ' + 23 + ' years old'); // Conercion
// console.log('I am ' + '23' + ' years old');

console.log('23' - '10' - 3); // - will do String to Number
console.log('23' + '10' + 3); // + will do Number to String
console.log('23' * '2'); // * will do String to number
console.log('23' / '2'); // / will do String to number

let n = '1' + 1; // '1' + 1 = 11
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + '5'); // '95'
console.log('10' - '4' - '3' - 2 + '5'); // '15'
*/

/*
// Truthy and Falsy Values - 5 falsy values - 0. '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('Get a job');
}

let height = 0;
if (height) {
    console.log('Yay, height is defined');
} else {
    console.log('Height is undefined');
}
*/


/*
// Equality Operators: == vs. ===
const age = '18';

if (age === 18) console.log("You just became an adult strict"); // === means strict equal
if (age == 18) console.log("You just became an adult loose"); // == means loose equal

const favorite = Number(prompt("What is your favorite number ?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // '23' == 23, 23 === 23
    console.log("Cool, 23 is a amazing number");
} else if (favorite === 7) {
    console.log("Cool, 7 is also a amazing number");
} else if (favorite === 10) {
    console.log("Cool, 10 is also a amazing number");
} else {
    console.log("Number is not 23 or 7");
}

if(favorite !== 23) { // !== means strict, != means loose
    console.log("Why not 23");
}
*/

/*
// Logical Operators
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah can drive');
// } else {
//     console.log('Sarah cannot drive');
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if(shouldDrive) {
    console.log('Sarah can drive');
} else {
    console.log('Sarah cannot drive');
}
*/

/*
// Assignments

// Values and Variables
let country = "Japan";
console.log(country);

let continent = "Asia";
console.log(continent);

let population = 10;
console.log(population);

// Data Types
let isIland = false;
console.log(typeof isIland);

let language
console.log(typeof language);

console.log(typeof country);

console.log(typeof population);

// Let, const, var
language = 'Japanese';
isIland = true;

// Basic Operators
const halfCountryPopulation = population / 2;
console.log(halfCountryPopulation);
console.log(population + 1)

console.log(6 < population);

const avgCountry = 33;
console.log(avgCountry > population);

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speaks ' + language;
console.log(description);

//Strings and template literals
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speaks ${language}`;
console.log(descriptionNew)

//If-else statements
if(population > 33){
    console.log(`${country}'s population is ${population-33} million below average`)
}

// Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// Equality Operators: == vs. ===
const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No border');
}
*/

// Challenges

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

// Coding Challenge 2
// Write your code below. Good luck! 🙂
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else {
    console.log(`Johns's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}
*/