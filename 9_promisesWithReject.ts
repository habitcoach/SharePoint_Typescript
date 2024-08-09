function simulateAsyncOperation(success: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Operation succeeded!");
            } else {
                reject("Operation failed!");
            }
        }, 1000); // Simulates an asynchronous operation with a 1-second delay
    });
}

// Using the promise
simulateAsyncOperation(true)
    .then(result => {
        console.log(result); // Output: Operation succeeded!
    })
    .catch(error => {
        console.error(error); // In case of an error
    })
    .finally(() => {   // this will throw error saying the finally cannot be found. BUt ignore as js file will be crated
        console.log("Operation is complete."); // This will execute regardless of the promise's outcome
    });


  /*
  Explanation
Creating a Promise:
simulateAsyncOperation function returns a Promise.
Inside the promise constructor, setTimeout is used to simulate an asynchronous operation (like an API call or file read).
Based on the success parameter, the promise is either resolved with a success message or rejected with an error message.
Using the Promise:

then method is used to handle the resolved value when the promise is fulfilled.
catch method is used to handle any errors if the promise is rejected.
  */