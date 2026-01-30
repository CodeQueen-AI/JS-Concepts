// Set item in Session Storage
sessionStorage.setItem("city", "Karachi");
sessionStorage.setItem("country", "Pakistan");

// Get item from Session Storage
let city = sessionStorage.getItem("city");
let country = sessionStorage.getItem("country");
console.log("City:", city);       // Karachi
console.log("Country:", country); // Pakistan

// Remove item from Session Storage
// sessionStorage.removeItem("city");

// Clear all items
// sessionStorage.clear();
