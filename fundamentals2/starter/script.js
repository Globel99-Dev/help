//------------- BMI CALCULATOR ------------
const mark = {
  firstname: 'Mark',
  lastName: 'Miller',
  height: 1.69,
  weight: 78,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstname: 'John',
  lastName: 'Smith',
  height: 1.95,
  weight: 92,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(john.bmi, mark.bmi);

john.johnBMI > mark.markBMI
  ? console.log(
      `"${john.firstname} ${john.lastName}'s BMI (${Math.floor(
        john.bmi
      )}) is higher than ${mark.firstname} ${mark.lastName}'s (${Math.floor(
        mark.bmi
      )})!"`
    )
  : console.log(
      `"${mark.firstname} ${mark.lastName}'s BMI (${Math.floor(
        mark.bmi
      )}) is higher than ${john.firstname} ${john.lastName}'s (${Math.floor(
        john.bmi
      )})!"`
    );

// ------------- KOALAS VS DOLPHINS ----------
const calcAverage = (score1, score2, score3) => {
  const average = score1 + score2 + score3 / 3;
  return average;
};
const avgDolphins = calcAverage(44, 23, 71);
console.log(`Average Dolphins: ${Math.floor(avgDolphins)}`);

const avgKoalas = calcAverage(65, 54, 49);
console.log(`Average Koalas: ${Math.floor(avgKoalas)}`);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(
      `Dolphins wins (${Math.floor(avgDolphins)} vs. ${Math.floor(avgKoalas)})`
    );
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(
      `Koalas wins (${Math.floor(avgKoalas)} vs. ${Math.floor(avgDolphins)})`
    );
  } else {
    console.log('No team wins...');
  }
}

checkWinner(avgDolphins, avgKoalas);

// ------------- FRUIT PROCESSOR -----------
/*const cutPieces = function (fruit) {
  return fruit * 4;
}
const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(4, 3));*/

// ---------- CALC AGE ------------
const x = '23';
const y = '42';
const z = '25';
const s = '15';

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1975, 'Mike'));

const friends = ['Edwin', 'Chico', 'Ursu'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
friends.push('Sami');
console.log(friends);
friends[2] = 'Robert';
console.log(friends);
const firstName = 'Richard';
const richardInfo = [firstName, 'Ruiz', 2037 - 1975, 'Webdev', friends];
console.log(richardInfo);

const richard = {
  firstName: 'Rick',
  lastName: 'Ruiz',
  birthYear: 2030,
  hasDriversLicense: false,
  job: 'Frontend-Dev',
  friends: ['Edwin', 'Chico', 'Ursu'],
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};
console.log(richard);
console.log(richard.lastName);
const nameKey = 'Name';
console.log(richard['first' + nameKey]);
console.log(richard['last' + nameKey]);
console.log(richard.getSummary());
console.log(richard.age);
console.log(richard.hasDriversLicense);

/*const interestedIn = prompt(
  'What you want to know? Choose between firstName, lastName, age, job, friends'
);
console.log(richard[interestedIn]);
console.log(
  `${richard.firstName} has ${richard.friends.length} friends, and his best friend is called ${richard.friends[0]}.`
);*/

// ------------ TIP CALCULATOR ------------
//With ternary operator
/*const calcTip = function (quantity) {
    const tip =
      quantity >= 50 && quantity <= 300 ? quantity * 0.15 : quantity * 0.2;
    console.log(tip);
    return tip;
  };
  
  const bills = [125, 555, 44];
  const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
  console.log(tips);
  const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  console.log(total);
  
  console.log(
    `The bill was ${bills}, the tip was ${tips}, and the total value ${
      Number(bills) + Number(tips)
    }`
  );
  // With if else statement
  const valueBill = prompt('Cantidad?');
  if (valueBill < 50) {
    console.log(`The bill is ${valueBill}, there is no tip, Yay!`);
  } else {
    const tip =
      valueBill >= 50 && valueBill <= 300 ? valueBill * 0.15 : valueBill * 0.2;
    console.log(
      `The bill was ${valueBill}, the tip was ${tip}, and the total value ${
        Number(valueBill) + Number(tip)
      }`
    );
  }*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverageTip = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverageTip(totals));
console.log(calcAverageTip(tips));
/*const calcAverage = function (arr = []) {
    for (let sum = 0; sum < bills.length; sum++) {}
  };
  const calcTip = function (quantity) {
    const tip =
      quantity >= 50 && quantity <= 300 ? quantity * 0.15 : quantity * 0.2;
    console.log(tip);
    return tip;
  };*/
console.log('Tacos');
355555 + 12154;
1;

const argoOrders = ['1234', '1235', '1236', '1237', '1238'];
const stampList = [];

testArray1 = [17, 21, 23];
testArray2 = [12, 5, -5, 0, 4];
testArray3 = [];
//let yes = 1;
function printForecast(arr) {
  for (i = 0; i < arr.length; i++) {
    //testArray3.push(` ... ${arr[i]}° C in ${yes++} day${i >= 1 ? 's' : ''}`);
    const preper = console.log(
      ` ... ${arr[i]}°C in ${i + 1} day${i >= 1 ? 's' : ''}`
    );
  }
}
printForecast(testArray2);
//console.log(preper);
//console.log(testArray3);
//printForecast(testArray2);
//console.log(testArray3);

/*const number = 9119;
function squareDigits(num) {
  let res = num.split('');
  console.log(res);
  //may the code be with you
}
squareDigits(number);*/

const highLoArray1 = '4 5 10 0 -10 1 -3 6 -6';
const highLoArray = highLoArray1.split(' ');
//const highLoNumbers = '';
//const highLoArray = [4, 5, 29, 54, 4, 0, -214, 542, -64, 1, -3, 6, -6];
//console.log(typeof highLoArray);
let minValue = '';
let maxValue = '';
function highAndLow(numbers) {
  for (i = 0; i < numbers.length; i++) {
    const curVal = Number(numbers[i]);
    if (curVal > maxValue) maxValue = curVal;
    if (curVal < minValue) minValue = curVal;
  }
  return `${maxValue} ${minValue}`;
}
highAndLow(highLoArray);
