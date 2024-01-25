Variables and Data Types:


Variable Declaration:

let greeting = "Hello, World!";
console.log(greeting); // Outputs: Hello, World!
//In JavaScript, the let keyword is used to declare variables. Variables are containers that store data values. In this example, a variable named greeting is declared and assigned the string value "Hello, World!". The console.log statement is used to display the value of the variable in the console.


Data Types:

//JavaScript has several primitive data types and complex data types.

let age = 25;                   // Number
let message = "Hello";          // String
let isStudent = true;            // Boolean
let numbersArray = [1, 2, 3];    // Array
let personObject = {             // Object
  name: "John",
  age: age,
  isStudent: isStudent
};

console.log(typeof age);           // Outputs: number
console.log(typeof message);       // Outputs: string
console.log(typeof isStudent);     // Outputs: boolean
console.log(typeof numbersArray);  // Outputs: object
console.log(typeof personObject);  // Outputs: object
//Number: Represents numeric values. The typeof operator can be used to check the type of a variable.
//String: Represents textual data. Strings are enclosed in single or double quotes.
//Boolean: Represents either true or false.
//Array: Represents an ordered collection of values. Arrays can hold values of different data types.
//Object: Represents a collection of key-value pairs. Objects can store various data types and functions.



Fördjupade exempel och hur de används:

HTML:
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Form Example</title>
</head>
<body>
    <h1>Simple Calculator</h1>

    <!-- Create a form with two number input fields and a button -->
    <form id="calculatorForm">
        <label for="num1">Enter Number 1:</label>
        <!-- Create an input field for the first number -->
        <input type="number" id="num1" required>

        <label for="num2">Enter Number 2:</label>
        <!-- Create an input field for the second number -->
        <input type="number" id="num2" required>

        <!-- Create a button to trigger the calculation -->
        <button type="button" onclick="calculate()">Calculate</button>
    </form>

    <!-- Create a paragraph element to display the result -->
    <p id="result"></p>

    <!-- Include the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>


JavaScript (script.js):

// Declare variables to store user input
let num1, num2;

// Create a function to handle the calculation
function calculate() {
    // Get user input from the form
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);

    // Check if input is valid
    if (isNaN(num1) || isNaN(num2)) {
        // Display an alert if input is not valid
        alert('Please enter valid numbers.');
        return;
    }

    // Perform a simple calculation
    const sum = num1 + num2;
    const product = num1 * num2;

    // Display the result
    displayResult(sum, product);
}

// Create a function to display the result
function displayResult(sum, product) {
    // Access the HTML element to display the result
    const resultElement = document.getElementById('result');

    // Create a string to show the result
    const resultString = `Sum: ${sum}, Product: ${product}`;

    // Update the content of the HTML element
    resultElement.textContent = resultString;
}



Explanation:

HTML:
<!DOCTYPE html>: Declares the HTML document type and version.

<html lang="en">: Defines the root element of the HTML document with the language attribute set to English.

<head>: Contains metadata about the HTML document.

<meta charset="UTF-8">: Specifies the character encoding of the document as UTF-8.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Sets the viewport properties for responsive design.

<title>Interactive Form Example</title>: Sets the title of the HTML document.

<body>: Contains the content of the HTML document.

<h1>Simple Calculator</h1>: Defines a top-level heading.

<form id="calculatorForm">: Creates a form element with the ID "calculatorForm."

<label for="num1">Enter Number 1:</label>: Creates a label for the first input field.

<input type="number" id="num1" required>: Creates an input field for entering the first number, restricted to numeric input and marked as required.

<label for="num2">Enter Number 2:</label>: Creates a label for the second input field.

<input type="number" id="num2" required>: Creates an input field for entering the second number, restricted to numeric input and marked as required.

<button type="button" onclick="calculate()">Calculate</button>: Creates a button that triggers the calculate() function when clicked.

<p id="result"></p>: Creates an empty paragraph element with the ID "result" to display the calculation result.

<script src="script.js"></script>: Links the HTML document to the JavaScript file (script.js).

JavaScript:
let num1, num2;: Declares two variables (num1 and num2) with the let keyword.

function calculate() {: Declares a function named calculate using the function keyword.

num1 = parseFloat(document.getElementById('num1').value);: Assigns the parsed numeric value of the first input field to the variable num1.

num2 = parseFloat(document.getElementById('num2').value);: Assigns the parsed numeric value of the second input field to the variable num2.

if (isNaN(num1) || isNaN(num2)) {: Checks if either num1 or num2 is not a number using the isNaN function.

alert('Please enter valid numbers.');: Displays an alert if the input is not valid.

return;: Exits the function if the input is not valid.

const sum = num1 + num2;: Declares a constant variable sum and calculates the sum of num1 and num2.

const product = num1 * num2;: Declares a constant variable product and calculates the product of num1 and num2.

displayResult(sum, product);: Calls the displayResult function with the calculated sum and product as arguments.

function displayResult(sum, product) {: Declares a function named displayResult with parameters sum and product.

const resultElement = document.getElementById('result');: Assigns the HTML element with the ID "result" to the constant variable resultElement.

const resultString = Sum: ${sum}, Product: ${product};: Declares a constant variable resultString and creates a template string to represent the result.

resultElement.textContent = resultString;: Sets the text content of the HTML element to the calculated result string using the textContent property.