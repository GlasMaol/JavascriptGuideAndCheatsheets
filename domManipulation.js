DOM Manipulation:
Selecting Elements:

const myElement = document.getElementById("myId");
const elementsByClass = document.getElementsByClassName("myClass");
//The Document Object Model (DOM) represents the structure of HTML documents. JavaScript interacts with the DOM to manipulate web page content. Here, elements are selected by their ID and class using the getElementById and getElementsByClassName methods.

EventListener:

myElement.addEventListener("click", function() {
  alert("Element clicked!");
});
//Event listeners enable JavaScript to respond to user interactions



Exempel mer utökad

//In this example, we'll build a simple program that allows users to toggle the visibility of a message on a webpage.


HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation Example</title>
</head>
<body>
    <h1>DOM Manipulation Example</h1>

    <!-- Message container and toggle button -->
    <div id="messageContainer">
        <p id="message">This is a hidden message.</p>
    </div>
    <button onclick="toggleMessage()">Toggle Message</button>

    <!-- Include the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>


JavaScript (script.js):

// Function to toggle the visibility of the message
function toggleMessage() {
    // Get the message element by its ID
    const messageElement = document.getElementById('message');

    // Toggle the visibility using the style.display property
    if (messageElement.style.display === 'none' || messageElement.style.display === '') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }
}


Explanation:


HTML:

<!DOCTYPE html>: Declares the HTML document type and version.

<html lang="en">: Defines the root element of the HTML document with the language attribute set to English.

<head>: Contains metadata about the HTML document.

<meta charset="UTF-8">: Specifies the character encoding of the document as UTF-8.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Sets the viewport properties for responsive design.

<title>DOM Manipulation Example</title>: Sets the title of the HTML document.

<body>: Contains the content of the HTML document.

<h1>DOM Manipulation Example</h1>: Defines a top-level heading.

<div id="messageContainer">: Creates a div with the ID "messageContainer" to contain the message.

<p id="message">This is a hidden message.</p>: Creates a paragraph element with the ID "message" to display the message.

<button onclick="toggleMessage()">Toggle Message</button>: Creates a button that calls the toggleMessage function when clicked.

<script src="script.js"></script>: Links the HTML document to the JavaScript file (script.js).


JavaScript:

function toggleMessage() {: Defines a function named toggleMessage.

Retrieves the message element with the ID "message" using document.getElementById and assigns it to the variable messageElement.
Checks the current value of the style.display property of messageElement to determine its visibility.
Toggles the visibility by setting the style.display property to either 'block' or 'none' based on its current state.
Inside the if statement in toggleMessage:

messageElement.style.display === 'none' || messageElement.style.display === '': Checks if the message element is currently hidden or has no specific display style.
Inside the if block in toggleMessage:

messageElement.style.display = 'block';: Sets the display style to 'block', making the message visible.
Inside the else block in toggleMessage:

messageElement.style.display = 'none';: Sets the display style to 'none', hiding the message.
This example demonstrates the use of DOM manipulation to toggle the visibility of a message on a webpage. The getElementById method is used to access the DOM element, and the style.display property is modified to control its visibility. The toggleMessage function is triggered by a button click event to toggle the visibility of the message.
