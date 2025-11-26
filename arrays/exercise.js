// sum of numbers in an array

const addNum = [10, 20, 30];
let num = 0;
for (let i = 0; i < addNum.length; i++) {
  num = num + addNum[i];
}
console.log("sum is " + num); // sum is 60

// even numbers to a new array push
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i];
  // jos current on parillinen, lisää evenNumbersiin
  if (current % 2 === 0) {
    evenNumbers.push(current);
  }
}

console.log(evenNumbers);
