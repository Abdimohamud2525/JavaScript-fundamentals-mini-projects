//numbers type is alweys number float, negative,desimal, etc
const numbers = 50;
const desimal = 10.5;
const negative = -10;
console.log(typeof numbers); // number
console.log(typeof desimal); // number
console.log(typeof negative); // number

// what is binary operators(logical operators) in js
const result = true && "HELLO";
console.log(result); // HELLO

const result2 = 0 && false;
console.log(result2); // 0

const isLogin = true;
const admin = false;
if (isLogin && admin) {
  console.log("welcome admin");
} else {
  console.log("welcome user");
}

// Or operator
const result3 = "this is true" || false;
console.log(result3); // this is true

const meeting = false;
const time = false;
if (meeting || time) {
  console.log("welcome meeting started");
} else {
  console.log("No meeting today");
}

// Not operator
const isOnline = false;
console.log(!isOnline); // true
// hadeena eheen
const driverLicense = true;
const hasCar = false;

if (driverLicense && !hasCar) {
  console.log("You can drive a car");
} else {
  console.log("You cannot drive a car");
}

// Double Not operator
const value = "Hello";
console.log(!!value); // true

// nullish coalescing operator
const userSetting = {
  theme: null,
  volume: 0,
  notice: false,
};
let theme = userSetting.theme ?? "dark";
console.log(theme); // dark

//math operators( +, -, *, /, %)

const a = 10;
const b = 5;
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0
// math random
const random = Math.random();
console.log("Random number between 0 and 1:", random);

const randomBetween10 = Math.floor(Math.random() * 10);
console.log("Random number between 0 and 10:", randomBetween10);

const randombetween10and50 = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
console.log("Random number between 10 and 50:", randombetween10and50);
