// Access elements
let heading = document.getElementById("heading")
let paragraph = document.querySelector(".text")
let button = document.getElementById("btn")

// Change content
heading.innerText = "Welcome to JS DOM"
paragraph.innerHTML = "This paragraph is changed using <b>innerHTML</b>."

// Change style
heading.style.color = "blue"
paragraph.style.fontSize = "18px"

// Event listener
button.addEventListener("click", function() {
    heading.innerText = "Button Clicked!"
    paragraph.style.color = "green"
})

// Create new element
let newPara = document.createElement("p")
newPara.innerText = "This is a new paragraph."
document.body.appendChild(newPara)

// Remove element (optional)
// paragraph.remove()
