// let, const, var
let x = 5;
let y = 6;
let z = x + y;

console.log(z); // 11
const pi = 3.14;
console.log(pi); // 3.14
var name = "John";
console.log(name); // John

// access ascii
const letter = "A";
console.log(letter.charCodeAt(0)); // 65

let symbol = "@";
console.log(symbol.charCodeAt(0)); // 64

// Include method
const phrase = "Hello, welcome to javascript";
console.log(phrase.includes("Hello")); // true

// example 2

const message = "welcome here";
console.log(message.includes("where")); // false

// slice method
const greeting = "Hello, world!";
console.log(greeting.slice(6, 12)); // world

// example 2
const question = "where you from?";
console.log(question.slice(10, 15)); // from

// toUpperCase method
const lowCase = "hello world";
console.log(lowCase.toUpperCase());

// toLowerCase method
const upCase = "HELLO WORLD";
console.log(upCase.toLowerCase());

// trim method
const trimStartExample = "  Hello world ";
console.log(trimStartExample.trim());

// example trimStart
const trimExample = "   Hello there!   ";
console.log(trimExample.trimStart());
// example trimEnd
const trimEndExample = "   Hello there!   ";
console.log(trimEndExample.trimEnd());

// replace method
const text = "I love dogs";
const newText = text.replace("dogs", "cats");
console.log(newText); // I love cats

// reapeat method
const laugh = "ha";
console.log(laugh.repeat(3)); // hahaha

// example 2
const music = "la";
console.log(music.repeat(5)); // lalalalala

// split method
const fruits = "apple,bananan,mango";
const fruitsList = fruits.split(",");
console.log(fruitsList);

// indexof
const textIndex = "Hello , my name is x ";
console.log(textIndex.indexOf("my")); //7
console.log(textIndex.indexOf("x")); //19

// number type
const num = 10;
console.log(typeof num);

// remember number is number
const floatNum = 10.5;
console.log(typeof floatNum);

// string type
const str = "Hello";
console.log(typeof str);

// infinity
const inf = 1 / 0;
console.log(inf); // Infinity
console.log(typeof inf); // number

// BigInt
const big = 9007199254740991n;
console.log(typeof big, big); // bigint

// template literal
const user = "Matti";
console.log(`Hei, ${user}!`); // Hei, Matti!
