// Creating a Promise
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Using the Promise
myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
