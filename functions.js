Functions:


Function Declaration:

function greet(name) {
  return "Hello, " + name + "!";
}

let greetingMessage = greet("Alice");
console.log(greetingMessage); // Outputs: Hello, Alice!
//Functions in JavaScript are blocks of code designed to perform a specific task. In this example, a function named greet is declared with a parameter name. The function concatenates the parameter with a greeting and returns the result. The function is then called with the argument "Alice", and the result is stored in greetingMessage.


Function Expression:

const add = function(a, b) {
  return a + b;
};

let sum = add(5, 3);
console.log(sum); // Outputs: 8
//A function expression involves assigning a function to a variable. In this case, the add variable holds an anonymous function that takes two parameters and returns their sum. The function is then invoked with the arguments 5 and 3, and the result is stored in sum.


Arrow Function:

const multiply = (a, b) => a * b;

let product = multiply(4, 5);
console.log(product); // Outputs: 20
//Arrow functions provide a more concise syntax for writing functions. The multiply function, in this case, takes two parameters and returns their product. Arrow functions are especially useful for short, one-line functions.


Exempel mer utförlig

//In this example, we'll build a simple to-do list application using functions to add tasks, mark tasks as completed, and display the list.

HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List Example</title>
</head>
<body>
    <h1>To-Do List</h1>

    <!-- Input for new task and buttons for actions -->
    <input type="text" id="newTask" placeholder="Enter a new task">
    <button onclick="addTask()">Add Task</button>
    <button onclick="displayTasks()">Display Tasks</button>

    <!-- Display area for tasks -->
    <div id="taskList"></div>

    <!-- Include the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>



JavaScript (script.js):

// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const newTask = document.getElementById('newTask').value;
    
    if (newTask.trim() !== '') {
        tasks.push({ task: newTask, completed: false });
        alert('Task added successfully!');
    } else {
        alert('Please enter a valid task.');
    }
}

// Function to mark a task as completed
function markAsCompleted(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        alert('Task marked as completed!');
    } else {
        alert('Invalid task index.');
    }
}

// Function to display all tasks
function displayTasks() {
    const taskListElement = document.getElementById('taskList');
    
    if (tasks.length === 0) {
        taskListElement.innerHTML = '<p>No tasks available.</p>';
    } else {
        let taskListHTML = '<ul>';
        
        for (let i = 0; i < tasks.length; i++) {
            const taskStatus = tasks[i].completed ? ' (Completed)' : '';
            taskListHTML += `<li>${tasks[i].task}${taskStatus}</li>`;
        }
        
        taskListHTML += '</ul>';
        taskListElement.innerHTML = taskListHTML;
    }
}



Explanation:

HTML:
<!DOCTYPE html>: Declares the HTML document type and version.

<html lang="en">: Defines the root element of the HTML document with the language attribute set to English.

<head>: Contains metadata about the HTML document.

<meta charset="UTF-8">: Specifies the character encoding of the document as UTF-8.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Sets the viewport properties for responsive design.

<title>To-Do List Example</title>: Sets the title of the HTML document.

<body>: Contains the content of the HTML document.

<h1>To-Do List</h1>: Defines a top-level heading.

<input type="text" id="newTask" placeholder="Enter a new task">: Creates an input field for entering new tasks.

<button onclick="addTask()">Add Task</button>: Creates a button that calls the addTask function when clicked.

<button onclick="displayTasks()">Display Tasks</button>: Creates a button that calls the displayTasks function when clicked.

<div id="taskList"></div>: Creates a div with the ID "taskList" to display the list of tasks.

<script src="script.js"></script>: Links the HTML document to the JavaScript file (script.js).

JavaScript:
let tasks = [];: Declares an array to store tasks using the let keyword.

function addTask() {: Defines a function named addTask.

Retrieves the value from the input field using document.getElementById and assigns it to the variable newTask.
Checks if the trimmed value of newTask is not an empty string.
If not empty, pushes a new task object into the tasks array and displays an alert; otherwise, displays an alert to enter a valid task.
function markAsCompleted(index) {: Defines a function named markAsCompleted.

Marks a task as completed based on the provided index.
Checks if the index is within valid bounds.
If valid, sets the completed property of the task to true and displays an alert; otherwise, displays an alert for an invalid index.
function displayTasks() {: Defines a function named displayTasks.

Retrieves the HTML element with the ID "taskList" and assigns it to the constant variable taskListElement.
Checks if there are no tasks and updates the content of taskListElement with a message.
If there are tasks, creates an HTML list (<ul>) with a loop (for) to iterate through tasks, updating taskListElement with the generated HTML.
Inside each function:

We use document.getElementById to access HTML elements.
We use various JavaScript statements (if, for, etc.) for conditional checks and loops.
We use the alert function to provide feedback to the user.
This example demonstrates the use of functions in a to-do list application. Functions encapsulate specific functionality, making the code modular and easier to understand.