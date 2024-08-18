const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const success =true; // Change to false to simulate an error
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});


myPromise
    .then((message) => {
        console.log(message); // Output: Operation was successful!
    })
    .catch((error) => {
        console.error(error); // Output: Operation failed!
    });

    const promise1 = new Promise((resolve) => {
        setTimeout(() => resolve('First operation '), 1000);
    });
    
    const promise2 = new Promise((resolve) => {
        setTimeout(() => resolve('Second operation '), 2000);
    });
    
    promise1
        .then((result1) => {
            console.log(result1); // First operation complete
            return promise2;
        })
        .then((result2) => {
            console.log(result2); // Second operation complete
        })
        .catch((error) => {
            console.error(error);
        });
    
    async function asyncFunction() {
        try {
            const result1 = await promise1;
            console.log(result1); // First operation complete
    
            const result2 = await promise2;
            console.log(result2); // Second operation complete
        } catch (error) {
            console.error(error);
        }
    }
    
    asyncFunction();
    