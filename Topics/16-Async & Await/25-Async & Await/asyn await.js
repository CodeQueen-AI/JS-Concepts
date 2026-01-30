// Simulating a delay with Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched after 2 seconds");
        }, 2000);
    });
}

// Using Async/Await
async function getData() {
    console.log("Fetching data...");
    let result = await fetchData();
    console.log(result);
}

getData();
