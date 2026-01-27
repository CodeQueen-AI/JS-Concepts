// HTML Example
// <button id="btn">Click Me</button>

let btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {
    console.log("Event Type:", event.type); // click
    console.log("Event Target:", event.target); // button element
    console.log("X Coordinate:", event.clientX); // mouse X position
    console.log("Y Coordinate:", event.clientY); // mouse Y position

    // Prevent default (if it's a form submit)
    // event.preventDefault();
});
