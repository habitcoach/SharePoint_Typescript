// Function that returns a promise to simulate an asynchronous operation

/*
In TypeScript, promises handle asynchronous operations, providing better control over the flow of code.

To create a new promise, use the new keyword followed by Promise. The Promise constructor accepts a 
function which should take two parameters:
A function to resolve the promise.
A function to reject the promise.

Once a promise is declared, use the .then() and .catch() methods to handle the success or failure of 
the 
asynchronous operation. The .then() method is called when the Promise is resolved, while the 
.catch() method
 is called when it is rejected.

 async and await are the alternative of using promises
*/


function msgAfterTimeout(msg: string, who: string, timeout: number): Promise<string> {
    return new Promise((resolve, reject) => {  //Promise executor function
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout); //setTimeout function is being used to delay the execution of the provided callback function. 
    });
}

msgAfterTimeout("something", "Foo", 2000)
    .then((msg) => { //This function will be invoked asynchronously when the Promise is resolved.
        // Return the modified msg for the next then
        return msgAfterTimeout(msg, "Bar", 2000);
    })
    .then((msg) => {
        // Return the modified msg for the next then
        return `${msg} - Done after 2000ms`;
    })
    .then((msg) => {
        console.log(msg);
    })
    .finally(() => {
        console.log('This is always executed');
    });

    