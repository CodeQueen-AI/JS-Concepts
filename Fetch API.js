// Fetching data from a public API
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        // Convert response to JSON
        return response.json();
    })
    .then((data) => {
        console.log("Fetched Data:", data);
        console.log("Title:", data.title);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// Using Async/Await with Fetch
async function fetchPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        let data = await response.json();
        console.log("Async/Await Data:", data);
        console.log("Title:", data.title);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchPost();
