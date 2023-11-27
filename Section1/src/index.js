//* 1 Variables & Data Types

// A. Variables

// const myName = 'cindy';
// let favoriteLanguage = 'Python';
// favoriteLanguage = 'JavaScript';
// let newFavoriteLanguage = favoriteLanguage;

// console.log(myName , newFavoriteLanguage);

// // B. Strings

// let firstVariable = 'Hello World';
// firstVariable = 10;

// let secondVariable = firstVariable;
// secondVariable = 'I guess';

// console.log(firstVariable);

// let yourName = 'Cindy Reyes';

// console.log('Hello, my name is' , yourName);

// C. Booleans

// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a <= b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');

  // D. The farm

//   let animal = 'cow';
//   let i = 'cow';

//   if (i == animal) {
//     console.log('mooooo');

//   } else {
//     console.log("Hey! You're not a cow");
//   }

//   // E. Driver's Ed

//   let age = 32;

// if (age >= 16) {
//     console.log('Here are the Keys!');
// } else {
//     console.log("Sorry, you're too young.");
// }

//* Loops

// A. the basics

// for (let i = 0; i < 10; i++) {
//     console.log(i);  
// }

// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }

// let v = 12;
//     while (v < 4000) {
//         if (v != 0 && v % 3 == 0)
//             console.log(v);;
//         v++;
//     }

// B. Get Even

// let g = 1;
//     while (g <= 100) {
//         if (g % 2 == 0)
//             console.log(g , 'is an even number');
//         g++;
//     }

// C. Give me Five

// let f = 0;
//     while (f <= 100) { 
//         if (f % 5 == 0) {
//             console.log("I found a" , f , "High five!" );
//         } 
//         if (f % 3 == 0) {
//             console.log("I found a" , f , "Three is a crowd");
//         }    
//         f++;
//     } 

// D. Savings Account

// Function sample found on stackoverflow
// function findSum(n) {
//     let bankAccount = 0;
//     for(let e = 1; e <= n; e++) {
//       bankAccount = bankAccount + e;
//     }
//     return bankAccount
//   }
  
//   let n = 10;
//   console.log(`Sum of numbers from 1 to ${n} is ${findSum(n)}`)

// let bankAccount = 0
// for (let e = 1; e <= 10; e++) {
//     bankAccount += e; 
// } 

// console.log(bankAccount);

// for (let e = 1; e <= 100; e++) {
//     bankAccount += 2 * e
// }

// console.log(bankAccount);

//* Functions

// a. printgreeting

// let printGreeting = 'Hello there'
let name = 'Slimer'

function printGreeting(name){
    console.log(`Hello there, ${name}!`)
}
printGreeting('Cindy')
printGreeting('alex')
printGreeting(name)

// b.printcool
function printCool(name){
    // console.log(`${name} is cool.`)
    return `${name} is cool.`
}

// printCool(name)
// printCool('alex')
// printCool('Captain Reynolds')
console.log(printCool("Captain Reynolds"));

// c. calculate cube
function calculateCube(num){
    return num**3
}

console.log(calculateCube(5))

// d. is vowel?
function isVowelThat(char){
    const lowerCase = char.toLowerCase()
    return lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'i' || lowerCase === 'o' || lowerCase === 'u' 
}

console.log(isVowelThat('A'))

// e. two lengths
function getTwoLengths(s1, s2){
    return [s1.length, s2.length]
}

console.log(getTwoLengths('Hank', 'Hippopopalous'))
console.log(getTwoLengths('Hello world', 'Hippopopalous'))

// f.
function getMultipleLengths(arr){
    const newArr = []
    // for (let i = 0; i < arr.length; i++){
    //     newArr.push(arr[i].length)
    // }
    // for (const string of arr) {
    //     newArr.push(string.length)
    // }
    arr.forEach(string => {
        newArr.push(string.length)
    });
    console.log(newArr)
}

getMultipleLengths(["hello", "what", "is", "up", "dude"])

// g.


