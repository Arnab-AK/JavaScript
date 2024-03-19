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

/*
// Reviewing Functions
const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirementAge = 65 - age;

    if (retirementAge > 0) {
        console.log(`${firstName} retires in ${retirementAge} years`);
        return retirementAge;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    // return retirementAge;
    // return `${firstName} retires in ${retirementAge} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

/*
// Introduction To Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsNew = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(yearsNew[0]);
const age2 = calcAge(yearsNew[1]);
const age3 = calcAge(yearsNew[yearsNew.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(yearsNew[0]), calcAge(yearsNew[1]), calcAge(yearsNew[yearsNew.length - 1])];
console.log(ages);
*/

/*
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add Element
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Element
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

/*
// Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']

];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/

/*
// Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const namekey = 'Name';
console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]);

// console.log(jonas.'last' + namekey);

const interestedIn = prompt('What do you want to know about jonas ? Choose between firstName, lastName, age, job and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'

console.log(jonas);

// Jonas has 3 friends, and his best friend is Michael

console.log([jonas.firstName] + ' has ' + [jonas.friends.length] + ' friends and his best friend is ' + [jonas.friends[0]] )
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`)
*/

/*
// Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense : false,
    // calcAge: function(birthYr) {
    //     return 2037 - birthYr;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        // console.log(this);
        this.age = 2037 - this.birthYear
        return this.age;
    },

    // function calcAge(birthYear) { // This will not work in a object
    //     return 2037 - 1991;
    // }

    getSummery: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas['calcAge'](1991));

// Jonas is a 46-year old teacher and he has a driver's license
console.log(jonas.getSummery());
*/


/*
// Challenges

// Coding Challenge 1
// Write your code below. Good luck! 🙂
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const score1Dolphins = 85;
const score2Dolphins = 90;
const score3Dolphins = 88;

const score1Koalas = 89;
const score2Koalas = 85;
const score3Koalas = 92;

const scoreDolphins = calcAverage(score1Dolphins, score2Dolphins, score3Dolphins);
const scoreKoalas = calcAverage(score1Koalas, score2Koalas, score3Koalas);

checkWinner(scoreDolphins, scoreKoalas);

function checkWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins > 2 * scoreKoalas) {
        console.log('Dolphins');
    } else if (scoreKoalas > 2 * scoreDolphins) {
        console.log('Koalas');
    } else {
        console.log('No team wins...');
    }
}

// Coding Challenge 2
// Write your code below. Good luck! 🙂
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips [0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips)
*/


