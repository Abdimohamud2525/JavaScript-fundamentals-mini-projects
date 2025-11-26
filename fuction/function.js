// check age
function isAdult(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}
// console.log(isAdult(20))
// console.log(isAdult(15))

// adultCount
const ages = [20, 30, 40, 50, 30, 10]
function adultCount(ages) {
  let count = 0
  for (let i = 0; i < ages.length; i++) {
    const current = ages[i]
    if (current >= 18) {
      count++
    }
  }
  return count
}
console.log(adultCount(ages))

// parilisia
const events = [1, 2, 6]

function eventNumber(event) {
  let eventCount = 0
  for (let i = 0; i < event.length; i++) {
    const current = event[i]
    if (current % 2 === 0) {
      eventCount++
    }
  }
  return eventCount
}
console.log(eventNumber(events))

//isMAX
const numbers = [10, 20, 30, 400]
function findMax(numbers) {
  let max = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    current = numbers[i]
    if (current > max) {
      max = current
    }
  }
  return max
}
console.log(findMax(numbers))

// find mini
const num = [10, 30, 40, -1]
function findMin(num) {
  let min = num[0]
  for (let i = 0; i < num.length; i++) {
    current = num[i]
    if (current < min) {
      min = current
    }
  }
  return min
}
console.log(findMin(num))
