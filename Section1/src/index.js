//* 1 Variables & Data Types

// A. Variables

const myName = 'cindy';
let favoriteLanguage = 'Python';
favoriteLanguage = 'JavaScript';
let newFavoriteLanguage = favoriteLanguage;

console.log(myName , newFavoriteLanguage);

// B. Strings

let firstVariable = 'Hello World';
firstVariable = 10;

let secondVariable = firstVariable;
secondVariable = 'I guess';

console.log(firstVariable);

let yourName = 'Cindy Reyes';

console.log('Hello, my name is' , yourName);

// C. Booleans

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a <= b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  // D. The farm

  let animal = 'cow';
  let i = 'cow';

  if (i == animal) {
    console.log('mooooo');

  } else {
    console.log("Hey! You're not a cow");
  }

  // E. Driver's Ed

  let age = 32;

if (age >= 16) {
    console.log('Here are the Keys!');
} else {
    console.log("Sorry, you're too young.");
}