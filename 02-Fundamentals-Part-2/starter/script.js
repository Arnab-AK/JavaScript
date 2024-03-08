'use strict';

/*
// Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 543;
*/


/*
// Functions ****

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor (appels, oranges) {
    const juice = `Juice with ${appels} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/


/*
// Function Declarations vs. Expressions

// Function Declearation
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const age1 = calcAge1(2000);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1990);
console.log(age2);

console.log(age1, age2);
*/

/*
// Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear; // Arrow Function
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
// Functions Calling Other Functions
function cutFruitsPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor (appels, oranges) {
    const applePieces = cutFruitsPieces(appels);
    const oragnePieces = cutFruitsPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${oragnePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
