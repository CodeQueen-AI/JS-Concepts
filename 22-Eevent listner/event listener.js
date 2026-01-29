// HTML Example
// <button id="myBtn">Click Me</button>

// Select button
let button = document.getElementById("myBtn");

// Click event
button.addEventListener("click", function() {
    alert("Button Clicked!");
});

// Mouseover event
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "lightblue";
});

// Mouseout event
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "";
});

// Input event
// <input type="text" id="myInput" placeholder="Type here">
let input = document.getElementById("myInput");
input.addEventListener("input", function(event) {
    console.log("Input Value:", event.target.value);
});
