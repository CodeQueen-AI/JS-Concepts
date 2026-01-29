// HTML elements ke liye example
// <p id="para">Hello World</p>
// <div class="box">Box</div>

// Select element by ID
let para = document.getElementById("para");
console.log(para.innerText); // Hello World
para.innerText = "Hello Sumbal"; // Change text

// Select element by class
let box = document.querySelector(".box");
box.style.backgroundColor = "yellow"; // Change style
box.style.padding = "10px";

// Create new element
let newDiv = document.createElement("div");
newDiv.innerText = "I am new!";
document.body.appendChild(newDiv);

// Remove element
// newDiv.remove();
