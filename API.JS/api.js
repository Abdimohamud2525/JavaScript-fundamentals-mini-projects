const loadUserBtn = document.querySelector("#load-users")
const userList = document.querySelector("#user-list")
const loading = document.querySelector("#status")

loadUserBtn.addEventListener("click", function () {
  loading.textContent = "loading"
  userList.innerHTML = ""
  fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response
      .json()
      .then((users) => {
        userList.innerHTML = ""
        loading.textContent = ""
        users.forEach(function (user) {
          const li = document.createElement("li")
          li.textContent = `name ${user.name}  email ${user.email}`
          userList.appendChild(li)
        })
      })
      .catch((error) => {
        console.log(error)
        loading.textContent = "virhe ladatessa"
      })
  )
})
