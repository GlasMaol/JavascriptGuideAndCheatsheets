
Cheatsheet

Try...catch statement:
try {
  // code that may potentially throw an exception
} catch (error) {
  // code to handle the error
}


Try...catch...finally statement:
try {
  // code that may potentially throw an exception
} catch (error) {
  // code to handle the error
} finally {
  // code that will run whether an error occurred or not
}


Try & catch

Example 1: Basic Try-Catch
javascript

try {
    // Code that might throw an error
    throw new Error('This is a custom error message.');
} catch (error) {
    // Code to handle the error
    console.error('An error occurred:', error.message);
}
//In this example, the code inside the try block deliberately throws an error using throw new Error(...). The catch block then handles the error and logs a custom error message to the console.


Example 2: Handling Different Types of Errors
javascript

try {
    // Code that might throw an error
    const result = 10 / 'abc';
    if (isNaN(result)) {
        throw new TypeError('Invalid operation: not a number.');
    }
} catch (error) {
    if (error instanceof TypeError) {
        console.error('Type error occurred:', error.message);
    } else {
        console.error('An unexpected error occurred:', error.message);
    }
}
//This example demonstrates how to handle specific types of errors. The code attempts to perform a mathematical operation with a string, resulting in a TypeError. The catch block checks the type of the error and provides specific handling for TypeError.


Example 3: Handling Asynchronous Errors
javascript

async function fetchData() {
    try {
        // Simulating an asynchronous operation
        const response = await fetch('https://example.com/api/data');
        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Calling the asynchronous function
fetchData();
//In this example, fetchData is an asynchronous function that fetches data from an API using the fetch API. The try block handles the asynchronous code, and the catch block handles any errors that may occur during the data-fetching process.


Example 4: Finally Block
javascript

function readFile() {
    let fileContent;
    try {
        // Code that might throw an error
        const file = 'nonexistent-file.txt';
        fileContent = readFileSync(file, 'utf-8');
        console.log('File read successfully:', fileContent);
    } catch (error) {
        console.error('Error reading file:', error.message);
    } finally {
        // Code that will always run, whether there was an error or not
        console.log('Closing resources...');
    }
}

// Calling the function
readFile();
//This example uses a finally block to ensure that certain code (e.g., closing resources) runs regardless of whether an error occurred in the try block or not.

//These examples showcase the basic usage of try and catch for handling errors in JavaScript. They cover scenarios like handling custom errors, specific error types, asynchronous operations, and using the finally block for cleanup.