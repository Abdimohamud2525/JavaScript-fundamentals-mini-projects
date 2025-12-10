// arrays in js is ordered list of items
// arrays are used to store multiple values in a single variable
// identified by numeric index starting from 0

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]); // output: apple
// console.log(fruits[1]); // output: banana
// console.log(fruits[2]); // output: cherry

// // length
// console.log(fruits.length); // output: 3

// //accessing update elements
// fruits[2] = "orange";
// console.log(fruits[2]); // output: orange

// // push
// fruits.push("grape");
// console.log(fruits); // output: ["apple", "banana", "orange", "grape"]

// // pop
// fruits.pop();
// console.log(fruits); // output: ["apple", "banana", "orange"]

// // unshift method
// const num = [2, 3, 4];
// const newNum = num.unshift(1);
// console.log(num); // output: [1, 2, 3, 4]

// // delete first element using shift
// const names = ["joon", "doe"];
// const newName = names.shift();
// console.log(names); // output: ["doe"]
// console.log(newName); // output: "joon"

// // destructuring
// const colors = ["green", "red", "yellow"];
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(colors);

// // defautl
// const num2 = [1, 2];
// const [a, b, c = 3] = num;
// console.log(a, b, c);

// // rest
// const hobbit = ["football", "gym", "basketball", "golf"];
// const [important, secondImportant, ...rest] = hobbit;
// console.log(important, secondImportant, rest);

// //split
// const str = "Hello word!";
// const char = str.split("");
// console.log(char);

// const name = "exampleName";
// const split = name.split("");
// console.log(split);

// no filter foor loop method
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let i = 0; i < number.length; i++) {
  const current = number[i];
  if (current % 2 === 0) {
    result.push(current);
  }
}
console.log(result);

// filter method
let result2 = number.filter(function (num) {
  return num % 2 === 0;
});
console.log(result2);
