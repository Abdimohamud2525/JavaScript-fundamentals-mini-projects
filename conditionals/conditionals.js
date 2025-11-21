// A programmer always wants to control the flow of the program
var bin = 9
console.log("Initial value of bin:", bin)

if (bin === 10) {
  console.log("Bin is exactly 10")
} else {
}
if (bin > 5) {
  console.log("Bin is greater than 5")
}

// Ternary Operators and Conditionals
// <Condition> ? <Expression1> : <Expression2>;
let result = bin === 10 ? "Yes its is 10" : "no ists not 10"
console.log(result)

let result2 = bin > 7 ? "its greater the 7" : "its less than 7"
console.log(result2)

// Problem statement
//You are given three variables named left_operand, right_operand, and operator. Write code for operator values so that each value does the following:

//'+': Add left_operand to right_operand and assign the result to ans.
//'-': Subtract left_operand from right_operand and assign the result to ans.
//'*': Multiply left_operand with right_operand and assign the result to ans.
//'/': Divide left_operand with right_operand and assign the result to ans.
//For any other operator, assign NaN to ans.
let all_operators = ["+", "-", "*", "/"]
let left_operand = 5
let right_operand = 10
let operator = "*"
let ans
if (operator === "+") {
  ans = left_operand + right_operand
} else if (operator === "-1") {
  ans = left_operand - right_operand
} else if (operator === "*") {
  ans = left_operand * right_operand
} else if (operator === "/") {
  ans = left_operand / right_operand
} else {
  ans = NaN
}
console.log("The answer is:", ans)
