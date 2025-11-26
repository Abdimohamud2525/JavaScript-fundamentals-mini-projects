// for loop
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// 2
const addNum = [10, 20, 30, 40]
let sum = 0
for (let i = 0; i < addNum.length; i++) {
  sum = sum + addNum[i]
}
console.log("sum is " + sum)

// while loops
let numbers = 0
while (numbers < 5) {
  console.log(numbers)
  numbers++
}

let count = 0
while (count < 20) {
  console.log(count)
  count++
}

let age = [10, 20, 15, 7, 18, 40]
for (let i = 0; i < age.length; i++) {
  const current = age[i]
  if (current < 18) {
    console.log("Your age is " + current)
  } else {
    console.log("you age is " + current)
  }
}

// count how many young people and adults
const ages = [10, 20, 15, 7, 18, 40, 50]

let minors = 0
let adults = 0

for (let i = 0; i < ages.length; i++) {
  const current = ages[i]
  if (current < 18) {
    minors++
  } else {
    adults++
  }
}

console.log("Nuoria:", minors)
console.log("Aikuisia:", adults)
