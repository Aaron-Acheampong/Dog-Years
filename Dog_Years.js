//my age
const myAge = 20;

//first two years
let earlyYears = 2;
earlyYears *= 10.5;

//subsequent years
let laterYears = myAge - 2;
//equivalent dog years
laterYears *=4;
console.log(`First two dog years = ${earlyYears} and next four dog years = ${laterYears}`);

//total age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//my name in lower case
let myName = 'Aaron Acheampong'.toLowerCase();

//Age summary
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);


