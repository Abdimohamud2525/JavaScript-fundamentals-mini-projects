// // tehtävä 1
// const henkilö = {
//   name: "mohamud",
//   ikä: 30,
//   city: "Helsinki",
//   isAdult: true,
// };
// console.log(henkilö);

// // tehtävä 2 Luo array, jossa on esim. 3–5 henkilöä.
// //Jokainen alkio on objekti, jossa on samat kentät kuin edell

// //isessä tehtävässä.
// const people = [
//   { name: "abdi", age: 15, city: "somalia", isAdult: false },
//   { name: "ali", age: 25, city: "finland", isAdult: true },
//   { name: "ahmed", age: 35, city: "sweden", isAdult: true },
// ];
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
//   console.log(people[i].age);
// }
// console.log(people);

// // tehtävä 3
// const countAdults = [
//   { name: "abdi", age: 15, city: "somalia", isAdult: false },
//   { name: "ali", age: 25, city: "finland", isAdult: true },
//   { name: "ahmed", age: 35, city: "sweden", isAdult: true },
// ];
// let countAdult = 0;
// for (let i = 0; i < countAdults.length; i++) {
//   const current = countAdults[i].isAdult;
//   console.log(current);
//   if (current === true) {
//     countAdult++;
//   }
// }

// // tai voi tehdä näinkin
// let countAdult2 = 0;
// for (let i = 0; i < countAdults.length; i++) {
//   const current = countAdults[i].age;
//   if (current >= 18) {
//     countAdult2++;
//   }
//   console.log(current);
// }

// function AdultsNames() {
//   let countNames = [];
//   const people = [
//     { name: "abdi", ages: 20, city: "Helsinki", isAdult: true },
//     { name: "maxamed", ages: 30, city: "Helsinki", isAdult: true },
//     { name: "maxamud", ages: 25, city: "Helsinki", isAdult: true },
//     { name: "ilyas", ages: 15, city: "Helsinki", isAdult: false },
//   ];

//   for (let i = 0; i < people.length; i++) {
//     const current = people[i].ages;
//     if (current >= 18) {
//       countNames.push(people[i].name);
//     }
//   }
//   return countNames;
// }
// console.log(AdultsNames());

// Aikuisten keski-ikä

// function AdultAverageAge() {
//   let count = 0;
//   let sum = 10;
//   const people = [
//     { name: "hamza", ages: 20, city: "Helsinki", isAdult: true },
//     { name: "yoonis", ages: 30, city: "Helsinki", isAdult: true },
//     { name: "ayaan", ages: 25, city: "Helsinki", isAdult: true },
//     { name: "ilyas", ages: 15, city: "Helsinki", isAdult: false },
//   ];
//   for (let i = 0; i < people.length; i++) {
//     const curent = people[i].ages;
//     if (curent >= 18) {
//       count++;
//       sum += curent;
//       // console.log(sum);
//     }
//   }
//   return sum / count;
// }
// console.log(AdultAverageAge());

// minors
// function minors() {
//   let minors = [];
//   const people = [
//     { name: "hamza", ages: 20, city: "Helsinki", isAdult: true },
//     { name: "yoonis", ages: 30, city: "Helsinki", isAdult: true },
//     { name: "ayaan", ages: 25, city: "Helsinki", isAdult: true },
//     { name: "ilyas", ages: 15, city: "Helsinki", isAdult: false },
//     { name: "maahirYares", ages: 8, city: "Helsinki", isAdult: false },
//   ];
//   for (let i = 0; i < people.length; i++) {
//     const current = people[i].ages;
//     if (current < 18) {
//       minors.push(people[i]);
//     }
//   }
//   return minors;
// }
// console.log(minors());

// Hae ihmiset tietystä kaupungista
// function findCity(people, cityName) {
//   let result = [];
//   for (let i = 0; i < people.length; i++) {
//     const current = people[i].city;
//     if (current === cityName) {
//       result.push(people[i]);
//     }
//   }
//   return result;
// }
// const people = [
//   { name: "hamza", ages: 20, city: "Sweden", isAdult: true },
//   { name: "yoonis", ages: 30, city: "somalia", isAdult: true },
//   { name: "ayaan", ages: 25, city: "kenya", isAdult: true },
//   { name: "ilyas", ages: 15, city: "Helsinki", isAdult: false },
//   { name: "maahirYares", ages: 8, city: "Helsinki", isAdult: false },
// ];
// console.log(findCity(people, "somalia"));

// Luo lista nimistä merkkijonoina
function namesList() {
  let info = [];
  const people = [
    { name: "hamza", ages: 20, city: "Sweden", isAdult: true },
    { name: "yoonis", ages: 30, city: "somalia", isAdult: true },
    { name: "ayaan", ages: 25, city: "kenya", isAdult: true },
    { name: "ilyas", ages: 15, city: "Helsinki", isAdult: false },
    { name: "maahirYares", ages: 8, city: "Helsinki", isAdult: false },
  ];
  for (let i = 0; i < people.length; i++) {
    const curent = people[i].name;
    info.push(curent);
  }
  return info;
}

console.log(namesList());
