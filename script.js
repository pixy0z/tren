const letters = "абвгдежзийклмнопрстуфхцчшщъыьэюя"
const block = document.querySelector(".blocks")

let current = ""

function randomLetter() {
    let i = Math.floor(Math.random() * letters.length)
    current = letters[i]
    block.textContent = current
}

randomLetter()

document.addEventListener("keydown", function(e) {
    if (e.key.toLowerCase() === current) {
        randomLetter()
    }
})
