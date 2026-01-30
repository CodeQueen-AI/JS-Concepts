// Access elements
let heading = document.getElementById("heading")
let clickBtn = document.getElementById("clickBtn")
let nameInput = document.getElementById("nameInput")
let myForm = document.getElementById("myForm")
let formInput = document.getElementById("formInput")

// 1. Click Event
clickBtn.addEventListener("click", function() {
    heading.innerText = "Button Clicked!"
    heading.style.color = "blue"
})

// 2. Input Event
nameInput.addEventListener("input", function() {
    console.log("Typed:", nameInput.value)
})

// 3. Submit Event
myForm.addEventListener("submit", function(event) {
    event.preventDefault() // prevent page reload
    console.log("Form submitted with:", formInput.value)
    heading.innerText = "Form Submitted!"
})
