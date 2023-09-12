let chosenOption = 0

function selectOption() {
  const options = document.querySelectorAll(".option")
  options.forEach((element) => {
    element.addEventListener("click", (e) => {
      options.forEach((element) => {
        element.classList.remove("active")
      })
      element.classList.add("active")
      chosenOption = e.target.innerText
    })
  })
}

function submitOption() {
  const formulario = document.getElementById("rating-state")
  const submitBtn = document.getElementById("submitBtn")
  const thanks = document.getElementById("thanks-state")
  let finalOption = document.getElementById("finalOption")
  submitBtn.addEventListener("click", (event) => {
    formulario.classList.add("d-none")
    thanks.classList.remove("d-none")
    finalOption.innerHTML = chosenOption
  })
}

document.addEventListener("DOMContentLoaded", () => {
  selectOption()
  submitOption()
})
