
Cheatsheet

If statement:
if (condition) {
  // code to be executed if condition is true
}


If...else statement:
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}


If...else if...else statement:
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
} else {
  // code to be executed if both conditions are false
}


Control Flow If:


If Statement:

let temperature = 22;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature > 20) {
  console.log("It's warm outside.");
} else {
  console.log("It's cool outside.");
}
//Conditional statements, like the if statement, allow code to make decisions based on specified conditions. Here, the temperature is checked, and different messages are logged based on whether it's hot, warm, or cool.


Switch Statement:

let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}
//A switch statement is used when there are multiple possible conditions to check. The value of dayOfWeek is compared to different cases, and the corresponding code block is executed. The break statement is crucial to exit the switch statement after a match.



Exempel mer ingående

//we'll build a simple program that checks the eligibility of a person to vote based on their age.

HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voting Eligibility Checker</title>
</head>
<body>
    <h1>Voting Eligibility Checker</h1>

    <!-- Input for age and button to check eligibility -->
    <label for="ageInput">Enter your age:</label>
    <input type="number" id="ageInput" required>
    <button onclick="checkEligibility()">Check Eligibility</button>

    <!-- Display area for eligibility result -->
    <p id="resultMessage"></p>

    <!-- Include the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>



JavaScript (script.js):

// Function to check voting eligibility
function checkEligibility() {
    // Get the age input value
    const age = parseInt(document.getElementById('ageInput').value);

    // Check eligibility using if statement
    if (age >= 18) {
        displayResult(true);
    } else {
        displayResult(false);
    }
}

// Function to display the eligibility result
function displayResult(isEligible) {
    const resultMessageElement = document.getElementById('resultMessage');

    // Use a ternary operator to determine the result message
    const resultMessage = isEligible ? 'You are eligible to vote!' : 'You are not eligible to vote.';

    // Display the result message
    resultMessageElement.textContent = resultMessage;
}



Explanation:

HTML:
<!DOCTYPE html>: Declares the HTML document type and version.

<html lang="en">: Defines the root element of the HTML document with the language attribute set to English.

<head>: Contains metadata about the HTML document.

<meta charset="UTF-8">: Specifies the character encoding of the document as UTF-8.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Sets the viewport properties for responsive design.

<title>Voting Eligibility Checker</title>: Sets the title of the HTML document.

<body>: Contains the content of the HTML document.

<h1>Voting Eligibility Checker</h1>: Defines a top-level heading.

<label for="ageInput">Enter your age:</label>: Creates a label for the age input field.

<input type="number" id="ageInput" required>: Creates an input field for entering the age, restricted to numeric input and marked as required.

<button onclick="checkEligibility()">Check Eligibility</button>: Creates a button that calls the checkEligibility function when clicked.

<p id="resultMessage"></p>: Creates an empty paragraph element with the ID "resultMessage" to display the eligibility result.

<script src="script.js"></script>: Links the HTML document to the JavaScript file (script.js).



JavaScript:
function checkEligibility() {: Defines a function named checkEligibility.

Retrieves the age input value using document.getElementById and assigns it to the variable age.
Uses an if statement to check if the person is eligible to vote based on their age.
Calls the displayResult function with the eligibility status.
function displayResult(isEligible) {: Defines a function named displayResult.

Retrieves the HTML element with the ID "resultMessage" and assigns it to the constant variable resultMessageElement.
Uses a ternary operator to determine the result message based on the isEligible parameter.
Displays the result message by updating the text content of resultMessageElement.
Inside the if statement in checkEligibility:

age >= 18: Checks if the age is greater than or equal to 18, the legal voting age.
Inside the ternary operator in displayResult:

isEligible ? 'You are eligible to vote!' : 'You are not eligible to vote.': Determines the result message based on the value of isEligible.
This example demonstrates the use of control flow and if statements to check the eligibility of a person to vote. The if statement evaluates a condition, and based on that condition, the program takes different actions. The ternary operator is used to concisely determine the result message.