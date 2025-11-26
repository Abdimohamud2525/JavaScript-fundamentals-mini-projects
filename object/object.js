// // tehtävä 1
// const henkilö = {
//   name: "mohamud",
//   ikä: 30,
//   city: "Helsinki",
//   isAdult: true,
// }
// console.log(henkilö)

// // tehtävä 2 Luo array, jossa on esim. 3–5 henkilöä.
// //Jokainen alkio on objekti, jossa on samat kentät kuin edell

// //isessä tehtävässä.
// const people = [
//   { name: "abdi", age: 15, city: "somalia", isAdult: false },
//   { name: "ali", age: 25, city: "finland", isAdult: true },
//   { name: "ahmed", age: 35, city: "sweden", isAdult: true },
// ]
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name)
//   console.log(people[i].age)
// }
// console.log(people)

// tehtävä 3
// const countAdults = [
//   { name: "abdi", age: 15, city: "somalia", isAdult: false },
//   { name: "ali", age: 25, city: "finland", isAdult: true },
//   { name: "ahmed", age: 35, city: "sweden", isAdult: true },
// ]
// let countAdult = 0
// for (let i = 0; i < countAdults.length; i++) {
//   const current = countAdults[i].isAdult
//   console.log(current)
//   if (current === true) {
//     countAdult++
//   }
// }

// // tai voi tehdä näinkin
// let countAdult2 = 0
// for (let i = 0; i < countAdults.length; i++) {
//   const current = countAdults[i].age
//   if (current >= 18) {
//     countAdult2++
//   }
//   console.log(current)
// }

function AdultsNames() {
  let countNames = []
  const people = [
    { name: "abdi", ages: 20, city: "Helsinki", isAdult: true },
    { name: "maxamed", ages: 30, city: "Helsinki", isAdult: true },
    { name: "maxamud", ages: 25, city: "Helsinki", isAdult: true },
    { name: "ilyas", ages: 15, city: "Helsinki", isAdult: false },
  ]

  for (let i = 0; i < people.length; i++) {
    const current = people[i].ages
    if (current >= 18) {
      countNames.push(people[i].name)
    }
  }
  return countNames
}
console.log(AdultsNames())
