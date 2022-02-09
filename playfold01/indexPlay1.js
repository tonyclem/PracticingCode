//      ==========      JvScript ES6 Sntax      ==========      //

//          ===     Practice 1      ===        //

let greet = "Hello World";
let myName = "Clement Anthony";
let professional = "Web Developer and Investors";
console.log(
  `${greet} This's ${myName}, I'm a professional ${professional} welcome to my page!`
);

//         ===      End Practice 1      ===     //

//          ===     Practice 2      ===        //

//                              condition statement                       //
let checkDayInYear = 365;
if (checkDayInYear < 367) {
  console.log("Is years is really great years, is completed");
} else {
  console.log("No is less years i think, so sorry");
}

//                               ternary oparator                           //

//                      practice 3                      //
const year = 2022;
// if this condition is true, return the first value ?
checkYear = year >= 2023 ? "We still in 2022 men" : "Yeap is new year again";
console.log(checkYear);

const a = (x, y) => 5 * 10;
console.log(a()); // 50

// Example

const weather = (cold) => {
  cold == true
    ? (cold = "The weather is so cold outside")
    : (cold = "wow the weather is sunny today");
  cold !== false;
};

console.log(weather()); // outprint = wow the weather is sunny today

function weather2(a, b) {
  return a !== b
    ? "great a weather is good more than b"
    : "unfortunate b weather is bit better today";
}

console.log(weather2(5, 20)); // outprint = great a weather is good more than b
