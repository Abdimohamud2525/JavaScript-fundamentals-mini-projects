// Näytä lista sivulla DOM:in avulla

const listEl = document.querySelector("#list-people")
const showListBtn = document.querySelector("#show-list")
const nameInput = document.querySelector("#name-input")
const addPerson = document.querySelector("#addperson")
const ListElment = document.querySelector("#list-people")
const people = [
  { name: "abdi", ages: 20, city: "Helsinki", isAdult: true },
  { name: "maxamed", ages: 30, city: "Helsinki", isAdult: true },
  { name: "maxamud", ages: 25, city: "Helsinki", isAdult: true },
  { name: "ilyas", ages: 15, city: "Helsinki", isAdult: false },
]

function listArray(item) {
  listEl.innerHTML = ""
  for (let i = 0; i < item.length; i++) {
    const person = item[i]
    const li = document.createElement("li")
    li.textContent = `${person.name}`
    listEl.appendChild(li)
  }
}

// showListBtn.addEventListener("click", function () {
//   const adults = people.filter(function (person) {
//     return person.ages >= 18
//   })
//   listArray(adults)
// })

// Tehtävä: “Lisää uusi nimi listaan” -nappi

addPerson.addEventListener("click", function () {
  ListElment.innerHTML = ""
  const name = nameInput
  if (name === "") {
    return
  }
  const li = document.createElement("li")
  li.textContent = name.value
  listEl.appendChild(li)
  nameInput.value = ""
})
