
//Cheatsheet

For loop:
for (let i = 0; i < 5; i++) {
  console.log(i); // replace with your code
}


While loop:
let i = 0;
while (i < 5) {
  console.log(i); // replace with your code
  i++;
}

forEach loop:
let array = ['apple', 'banana', 'cherry'];
array.forEach(function(item) {
  console.log(item); // replace with your code
})

Do...while loop:
let i = 0;
do {
  console.log(i); // replace with your code
  i++;
} while (i < 5);



Loops:

For Loop:

for (let i = 0; i < 5; i++) {
  console.log("Iteration " + (i + 1));
}
//Loops allow the execution of a block of code repeatedly. The for loop consists of three parts: initialization (let i = 0), condition (i < 5), and iteration (i++). In each iteration, the code block inside the loop is executed.



While Loop:

let i = 0;
while (i < 5) {
  console.log("Iteration " + (i + 1));
  i++;
}
//The while loop continues to execute a block of code as long as the specified condition is true. It is important to manually increment or decrement the loop variable within the loop body to avoid an infinite loop.


HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial Calculator</title>
</head>
<body>
    <h1>Factorial Calculator</h1>

    <!-- Input for the number and button to calculate factorial -->
    <label for="numberInput">Enter a number:</label>
    <input type="number" id="numberInput" required>
    <button onclick="calculateFactorial()">Calculate Factorial</button>

    <!-- Display area for the factorial result -->
    <p id="resultMessage"></p>

    <!-- Include the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>


JavaScript (script.js):

// Function to calculate factorial using a loop
function calculateFactorial() {
    // Get the number input value
    const number = parseInt(document.getElementById('numberInput').value);

    // Check if the input is a positive integer
    if (number < 0 || !Number.isInteger(number)) {
        alert('Please enter a positive integer.');
        return;
    }

    // Initialize factorial to 1
    let factorial = 1;

    // Calculate factorial using a for loop
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Display the result
    displayResult(factorial);
}

// Function to display the factorial result
function displayResult(result) {
    const resultMessageElement = document.getElementById('resultMessage');
    
    // Display the result message
    resultMessageElement.textContent = `Factorial: ${result}`;
}
Explanation:


HTML:

<!DOCTYPE html>: Declares the HTML document type and version.

<html lang="en">: Defines the root element of the HTML document with the language attribute set to English.

<head>: Contains metadata about the HTML document.

<meta charset="UTF-8">: Specifies the character encoding of the document as UTF-8.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Sets the viewport properties for responsive design.

<title>Factorial Calculator</title>: Sets the title of the HTML document.

<body>: Contains the content of the HTML document.

<h1>Factorial Calculator</h1>: Defines a top-level heading.

<label for="numberInput">Enter a number:</label>: Creates a label for the number input field.

<input type="number" id="numberInput" required>: Creates an input field for entering a number, restricted to numeric input and marked as required.

<button onclick="calculateFactorial()">Calculate Factorial</button>: Creates a button that calls the calculateFactorial function when clicked.

<p id="resultMessage"></p>: Creates an empty paragraph element with the ID "resultMessage" to display the factorial result.

<script src="script.js"></script>: Links the HTML document to the JavaScript file (script.js).


JavaScript:
function calculateFactorial() {: Defines a function named calculateFactorial.

Retrieves the number input value using document.getElementById and assigns it to the variable number.
Checks if the input is a positive integer using an if statement.
Initializes the variable factorial to 1.
Uses a for loop to calculate the factorial of the given number.
Calls the displayResult function with the calculated factorial.
function displayResult(result) {: Defines a function named displayResult.

Retrieves the HTML element with the ID "resultMessage" and assigns it to the constant variable resultMessageElement.
Updates the text content of resultMessageElement with the calculated factorial.
Inside the if statement in calculateFactorial:

number < 0 || !Number.isInteger(number): Checks if the number is less than 0 or not an integer.
Inside the for loop in calculateFactorial:

for (let i = 1; i <= number; i++): Initializes a loop variable i to 1, repeats the loop while i is less than or equal to number, and increments i in each iteration.
factorial *= i: Multiplies the current value of factorial by the loop variable i in each iteration.
This example demonstrates the use of loops, specifically a for loop, to calculate the factorial of a given number. The loop iterates through the numbers from 1 to the given number, updating the factorial in each iteration. The if statement ensures that the input is a valid positive integer.