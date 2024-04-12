// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// Setting up Prettier and VS Code || Installing Node.js and Setting Up a Dev Environment
const x = '23';
if (x === 23) console.log(23);

const caclAge = birthYear => 2037 - birthYear;
console.log(caclAge(1991));
*/

// Learning How to Code || How to Think Like a Developer: Become a Problem Solver!

// Using Google, StackOverflow and MDN || Debugging (Fixing Errors)
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitude);
*/

/*
// Debugging with the Console and Breakpoints ||
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: Number(prompt('Degrees celcius: ')),
    value: 10,
  };

  console.table(measurement);
  // console.log(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// Using a Debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

/*
// Coding Challenge #1
const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  let str = '';

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    str = str + `${temps[i]}*C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(temperatures2);
*/
