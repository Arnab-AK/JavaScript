"use strict";

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
// Iteration: The for Loop
// console.log('Lifting weight repetition 1');
// console.log('Lifting weight repetition 2');
// console.log('Lifting weight repetition 3');
// console.log('Lifting weight repetition 4');
// console.log('Lifting weight repetition 5');
// console.log('Lifting weight repetition 6');
// console.log('Lifting weight repetition 7');
// console.log('Lifting weight repetition 8');
// console.log('Lifting weight repetition 9');
// console.log('Lifting weight repetition 10');

// For loops keeps running while condition is true
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}
*/

/*
// Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])

for(let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length ; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and Break
console.log('---- Only Strings ----');
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('---- Break with number ----');
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}
*/

/*
// Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Strating Exercise ${exercise} ----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting Weight Repetition ${rep}`);
    }
}
*/

/*
// The While Loop
for (let rep = 1; rep <= 2; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 2) {
    console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You roller a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/

/*
// Assignments

//Functions
function describeCountry(country, population, capitalCity) {
  const info = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return info;
}

console.log(describeCountry("India", "1400", "Delhi"));
console.log(describeCountry("China", "1300", "Beijing"));
console.log(describeCountry("USA", "300", "Washington DC"));

// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  const info = (population / 7900) * 100;
  return info;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld1(1400));
console.log(percentageOfWorld1(1300));
console.log(percentageOfWorld1(300));

// Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const info1 = percentageOfWorld3(1400);
const info2 = percentageOfWorld3(1300);
const info3 = percentageOfWorld3(300);

console.log(info1, info2, info3);

// Functions Calling Other Functions
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld3(population);
  const info = `${country} has ${population} million people, which is about ${percentage} of the world`;
  return info;
};

console.log(describePopulation("China", 1400));
console.log(describePopulation("India", 1300));
console.log(describePopulation("USA", 300));

// Introduction to Arrays
const populations = [1400, 1300, 300, 3];

console.log(length.population === 4);

const percentageNew = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
];
console.log(percentageNew);

// Basic Array Operations (Methods)
const neighbours = ["Nepal", "Bhutan", "China"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

neighbours[neighbours.indexOf("China")] = "Republic of China";
console.log(neighbours);

// Introduction to Objects
const myCountry = {
  country: "USA",
  capital: "Washington DC",
  language: "English US",
  population: 300,
  neighbours: ["Canada", "Mexico"],
};

// Dot vs. Bracket Notation
const myCountry = {
  country: "USA",
  capital: "Washington DC",
  language: "English US",
  population: 300,
  neighbours: ["Canada", "Mexico"],
};

const info = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;
console.log(info);

myCountry.population += 100;
console.log(myCountry);

myCountry["population"] -= 100;
console.log(myCountry);

// Object Methods
const myCountry = {
  country: "USA",
  capital: "Washington DC",
  language: "English US",
  population: 300,
  neighbours: ["Canada", "Mexico"],

  describe: function () {
    return `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

console.log(myCountry);
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

// Coding Challenge 3
// Write your code below. Good luck! 🙂
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height*this.height)
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height*this.height)
        return this.bmi;
    }   
}

console.log(mark.calcBMI(), john.calcBMI())

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
}

// Coding Challenge 4
// Write your code below. Good luck! 🙂
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    const total = tip + bills[i];
    totals.push(total);
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        const average = sum/arr.length;
    }
    return average
}

const totalAverage = calcAverage(totals);
*/
