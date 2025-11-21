// prompt Mini-project: Movie ticket price calculator

function ticketCalculator(age, isStudent) {
  if (age < 0 || age > 120) {
    return "Invalid age"
  } else if (age < 7) {
    return "0£"
  } else if (isStudent === true) {
    return "8£"
  } else if (age >= 65) {
    return "6£"
  } else {
    return "12£"
  }
}

const userInput = prompt("Enter your age")
const age = Number(userInput)
const studentInput = prompt("are you a student yes/no")
const isStudent = studentInput.toLowerCase() === "yes"
const ticketPrice = ticketCalculator(age, isStudent)
// Test cases
console.log("Your are " + age + " years old. ")
console.log("student " + isStudent)
console.log(`Your ticket price is ${ticketPrice}`)
