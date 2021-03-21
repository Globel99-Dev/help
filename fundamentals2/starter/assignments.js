const country = 'El Salvador';
const continent = 'America';
let population = 6;
isIsland = false;
const language = 'spanish';
const description = `${country}, is in ${continent}, and its ${population} millions people speak ${language}.`;
console.log(description);
/* const numNeighbours = prompt(`How many neighbour countries your country have?`);
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('There are ${numNeighbours} borders');
} else {
  console.log(`No borders`);
}*/
if (population < 50 && language == 'english' && !isIsland) {
  console.log(`You should live in ${country} 😃`);
} else {
  console.log(`${country} does not meet your criteria 😫`);
}
console.log(
  `If ${country} is splitted in half, each half will contain ${
    population / 2
  } millions people`
);
population > 33
  ? console.log(`${country}'s population is above average.`)
  : console.log(
      `${country}'s population is ${33 - population} millions below average.`
    );

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log(`MOST number of native speakers!`);
    break;
  case 'spanish':
    console.log(`2nd place in number of native speakers`);
    break;
  case 'english':
    console.log(`3rd place`);
    break;
  case 'hindi':
    console.log(`number 4`);
    break;
  case 'arabic':
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too 😄`);
}
console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
console.log(population + 7);
console.log(population + 124);
console.log(`Increassing population by 1 million, (${population + 1})`);
console.log(`Finland has 6 million people like ${country}.`);

console.log(
  typeof country,
  typeof continent,
  typeof population,
  typeof isIsland,
  typeof language
);

const firstCountry = describeCountry('El Salvador', 6, 'San Salvador');
console.log(firstCountry);
const secondCountry = describeCountry('Italy', 60, 'Rome');
console.log(secondCountry);
const thirdCountry = describeCountry('Japan', 63, 'Tokyo');
console.log(thirdCountry);
function describeCountry(country, population, capitalCity) {
  const thisCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return thisCountry;
}

//This is function declaration
function percentageOfWorld1(country, population) {
  const percentage = (population / 7900) * 100;
  const percentageCountry = `${country} has ${population} millions people, so it's about the ${percentage}% of the world population`;
  return percentageCountry;
}

//This is function expression
const percentageOfWorld2 = function (country, population) {
  const percentage = (population / 7900) * 100;
  const percentageCountry = `${country} has ${population} millions people, so it's about the ${percentage}% of the world population`;
  return percentageCountry;
};

// Arrow function
const percentageOfWorld3 = (country, population) => {
  const percentage = (population / 7900) * 100;
  return `${country} has ${population} millions people, so it's about the ${percentage}% of the world population`;
};

const firstCountry1 = percentageOfWorld1('El Salvador', 6);
console.log(firstCountry);
const secondCountry2 = percentageOfWorld2('China', 1441);
console.log(secondCountry);
const thirdCountry3 = percentageOfWorld3('Italy', 63);
console.log(thirdCountry);

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const pieceOfText = `${country} has ${population} million people, which is about ${percentage}% of the world`;
  return pieceOfText;
};

const firstCountry4 = describePopulation('El Salvador', 6);
console.log(firstCountry);
const secondCountry5 = describePopulation('China', 1441);
console.log(secondCountry);
const thirdCountry6 = describePopulation('Italy', 63);
console.log(thirdCountry);

// A function called inside another function.
const percentageOfWorld = function (processData) {
  return (processData / 7900) * 100;
};

const populations = [6, 60, 120, 3];
const percentages = [];
console.log(
  `The array named population has 4 elements: (${
    populations.length === 4 ? 'true' : 'false'
  })`
);
for (i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld4(populations[i]));
}
function percentageOfWorld4(population) {
  const percentage = (population / 7900) * 100;
  return percentage;
}

const neighbours = ['Guatemala', 'Honduras', 'Nicaragua'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
  // Verify if array NOT includes value
  console.log('Probably not a Central European Country 😁');
}
//searching Honduras inside the array named neighbours
console.log(neighbours.indexOf('Honduras'));
//Update record in array
neighbours.splice(1, 1, 'Republic of Honduras');
console.log(neighbours);

const myCountry = {
  country: 'El Salvador',
  capital: 'San Salvador',
  language: 'Spanish',
  population: 6,
  neighbours: ['Guatemala', 'Honduras', 'Nicaragua'],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    const checkNeighbours =
      myCountry.neighbours.length > 0
        ? (this.isIsland = false)
        : (this.isIsland = true);
  },
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
//Increasing population by 2 using dot notation
console.log((myCountry.population = myCountry.population - 2));
//Decreasing population by 2 using bracket notation
console.log(myCountry['population'] + 2);
console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);
console.log(myCountry.describe());

const voters = [];
for (i = 1; i <= 50; i++) {
  voters.push(i);
  console.log(`Voter number ${i} is currently voting`);
}
console.log(voters);

//Reading back array populations = [6, 20, 120, 3]
const percentages2 = [];
for (i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld4(populations[i]));
}
function percentageOfWorld4(population) {
  const percentage = (population / 7900) * 100;
  return percentage;
}

// -------- LOOP INSIDE A LOOP ------------
const exercises = ['squat', 'run', 'lifting'];
for (let exercise = 0; exercise < exercises.length; exercise++) {
  console.log(`---Starting exercise ${exercises[exercise]}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercises[exercise]}: repetition ${rep}`);
  }
}

const listOfNeighbous = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

// I don't understand this loop. Nedd to study more.
// i = 3 elements inside the array
for (let i = 0; i < listOfNeighbous.length; i++) {
  // y = Every element inside every array inside the array.
  for (let y = 0; y < listOfNeighbous[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbous[i][y]}`);
    //console.log(`Neighbour: ${listOfNeighbous[0][0]}`);
    //console.log(`Neighbour: ${listOfNeighbous[0][1]}`);
    //console.log(`Neighbour: ${listOfNeighbous[1][0]}`);
    //console.log(`Neighbour: ${listOfNeighbous[2][0]}`);
    //console.log(`Neighbour: ${listOfNeighbous[2][1]}`);
    //console.log(`Neighbour: ${listOfNeighbous[2][2]}`);
  }
}

let diceRoll = Math.floor(Math.random() * 6) + 1;

while (diceRoll !== 6) {
  console.log(`This is not 6, this is: ${diceRoll}`);
  diceRoll = Math.floor(Math.random() * 6) + 1;
  if (diceRoll === 6) console.log(`This is a ${diceRoll}`);
}
