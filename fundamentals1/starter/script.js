/*let js = "Amazing";
console.log(40 + 8 + 23 - 10);
let firstName = "Richard"; */

/*const country = "El Salvador";
const continent = "America";
var population = prompt('Population??');
const isIsland = 'false';
const language = 'spanish';
console.log("Mi pais se llama: " + country + ", esta situado en el contiente " + continent + ", la poblacion total es de " + population + " millones mas o menos, " + "no es una isla, y la lengua oficial es el " + language);
console.log(`If the conuntry will be split in half, every half will have ${(population / 2)} million people`)
console.log(`Finland has the same population of my country: ${population} million people`);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log("My country es under the average population that is 33 million people");
console.log(description);
if (population < 33) {
    console.log(`${country}'s population is ${33 - population} below average`);
} else {
    console.log(`${country}'s population es above the average`);
}

//population = population++;
//console.log(population);
//population = population--;
//console.log(population);

if (language === "english" && population < 50 && isIsland != true) {
    console.log(`You should live in ${country} 😀`);
} else {
    console.log(`${country} does not meet your criteria 😔`);

}

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too 😋');
}

console.log(`${country}'s population is ${population < 33 ? 'below' : 'above'} average`);
*/

/* const numNeighbours = prompt('How many neighbour countries does your country have?');
if (Number(numNeighbours) === 1) {
    console.log(`Only ${numNeighbours} border!`);
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
} */

/*const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;
const markBmi = Math.floor(markWeight / (markHeight * markHeight));
const johnBmi = Math.floor(johnWeight / johnHeight ** 2);
const markHigherBMI = (markBmi > johnBmi);
console.log("Mark BMI = " + markBmi);
console.log("John BMI = " + johnBmi);
if (markBmi > johnBmi) {
    console.log(`Mark sei piu ciccione, il tuo BMI e = ${markBmi}`);
} else {
    console.log(`John sei piu ciccione, il tuo BMI e = ${johnBmi}`);
}*/

/* const birthYear = prompt("En que agno naciste??");
const actualYear = 2037;
const personAge = actualYear - birthYear;
const licenseAge = 18
const yearsLeft = licenseAge - personAge
if (personAge >= licenseAge) {
    console.log(`You can drive, cause You are  ${personAge} years old 🚕`);
}
else {
    console.log(`You must wait ${yearsLeft} years yet 🚲`);
} */


/*const dolphinDataScore = [];
const koalaDataScore = [];

dolphinDataScore.push(prompt("Dolphin's score 1:"));
dolphinDataScore.push(prompt("Dolphin's score 2:"));
dolphinDataScore.push(prompt("Dolphin's score 3:"));

koalaDataScore.push(prompt("koala's score 1:"));
koalaDataScore.push(prompt("koala's score 2:"));
koalaDataScore.push(prompt("koala's score 3:"));

const dolphinScore = Math.floor((Number(dolphinDataScore[0]) + Number(dolphinDataScore[1]) + Number(dolphinDataScore[2])) / dolphinDataScore.length);
const koalaScore = Math.floor((Number(koalaDataScore[0]) + Number(koalaDataScore[1]) + Number(koalaDataScore[2])) / dolphinDataScore.length);
console.log(`Dolphin team score= ${dolphinScore}, Koala team score= ${koalaScore}`);

// Primero probamos con IF/ELSE and it works

/*if (dolphinScore > koalaScore && dolphinScore >= 100) {
    console.log("The winner is Dolphin team!");
}
else if (koalaScore > dolphinScore && koalaScore >= 100) {
    console.log("The winner is Koala team!");
}
else if (koalaScore === dolphinScore) {
    console.log("Draw!");
}
else {
    console.log("There is no winner!");
}

// Probamos con SWITCH and it works too.

switch (true) {
    case dolphinScore > koalaScore && dolphinScore >= 100:
        console.log(`With a score of: ${dolphinScore}. The winner is Dolphin's team!`);
        break;
    case dolphinScore < koalaScore && koalaScore >= 100:
        console.log(`With a score of: ${koalaScore}. The winner is Koala's team!`);
        break;
    case dolphinScore === koalaScore:
        console.log(`With a score of: ${dolphinScore}, for Dolphins and a score of: ${koalaScore}, There is a Draw!`);
        break;
    default:
        console.log('There is no winner!');
}*/


/* const day = prompt("Que dia es hoy?");
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to cooding meetup');
}
else if (day === 'tuesday') {
    console.log('Prepare theory videos');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
}
else if (day === 'friday') {
    console.log('Record videos');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
}
else {
    console.log('Not a valid day');
}*/

const valueBill = prompt('Cantidad?');
if (valueBill < 50) {
    console.log(`The bill is ${valueBill}, there is no tip, Yay!`);
} else {
    const tip = valueBill >= 50 && valueBill <= 300 ? valueBill * 0.15 : valueBill * 0.20;
    console.log(`The bill was ${valueBill}, the tip was ${tip}, and the total value ${Number(valueBill) + Number(tip)}`);
}
