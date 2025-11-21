// exercise 1 edult or not
let age = 15
function isAdult(age) {
  if (age >= 18) {
    return age + " is an adult"
  } else {
    return age + " is not an adult"
  }
}
console.log(isAdult(age))
console.log(isAdult(18))

// exercise 2 positive negative or zero

function numberType(num) {
  if (num > 0) {
    return num + " is positive"
  } else if (num < 0) {
    return num + " is negative"
  } else {
    return num + " is zero"
  }
}
console.log(numberType(0))
console.log(numberType(-10))

// exercise 3 Points → grade
function gradPoints(points) {
  if (points >= 90 && points <= 100) {
    return "Excellent"
  } else if (points >= 70 && points <= 89) {
    return "Good"
  } else if (points >= 50 && points <= 69) {
    return "Pass"
  } else if (points >= 0 && points <= 49) {
    return "Fail"
  } else {
    return "Invalid points"
  }
}

console.log(gradPoints(95))
console.log(gradPoints(45))
console.log(gradPoints(75))
console.log(gradPoints(150))

// exercise 4 movie ticket price
function ticketPrice(age, isStudent) {
  if (age < 7) {
    return "0£"
  } else if (isStudent === true) {
    return "8£"
  } else if (age >= 65) {
    return "6£"
  } else {
    return "12£"
  }
}

console.log(ticketPrice(5))
console.log(ticketPrice(20, true))
console.log(ticketPrice(70))
console.log(ticketPrice(30))

// exercise 5 The larger of the two numbers
function maxOFTwo(num1, num2) {
  if (num1 > num2) {
    return "a"
  } else {
    return "b"
  }
}
console.log(maxOFTwo(10, 5))
console.log(maxOFTwo(3, 8))
