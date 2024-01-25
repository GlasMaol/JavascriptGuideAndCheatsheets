
//Cheatsheet Arrays

Creating an Array:
let fruits = ['apple', 'banana', 'cherry'];

Accessing Elements:
let thirdFruit = fruits[2]; // arrays start at 0, so index 2 is the third element

Array Length:
let length = fruits.length;

Adding Elements:
fruits.push('date'); // adds to the end
fruits.unshift('elderberry'); // adds to the beginning

Removing Elements:
let lastFruit = fruits.pop(); // removes from the end
let firstFruit = fruits.shift(); // removes from the beginning

Index of an Element:
let bananaIndex = fruits.indexOf('banana');

Looping through an Array:
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}



//Cheatsheet Objects

Creating an Object:
let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};

Accessing Properties:
let model = car.model; // Dot notation
let make = car['make']; // Bracket notation

Adding/Updating Properties:
car.color = 'blue'; // adds a new property 'color'
car.make = 'Honda'; // updates the value of 'make'

Deleting Properties:
delete car.year;

Checking a Property:
'color' in car; // returns true if 'color' is a property in car

Looping through an Object:
for(let key in car) {
  console.log(key, car[key]);
}



//Arrays and Objects:
//Array Methods:

const numbers = [1, 2, 3, 4, 5];

numbers.push(6);        // Add to end
numbers.pop();          // Remove from end
numbers.shift();        // Remove from beginning
numbers.unshift(0);     // Add to beginning

const slicedArray = numbers.slice(1, 4);  // Returns [2, 3, 4]

console.log(numbers);   // Outputs: [0, 1, 2, 3, 4, 5]
console.log(slicedArray); // Outputs: [1, 2, 3]
//Arrays are a fundamental data structure in JavaScript. They have built-in methods to manipulate their contents. In this example, various array methods are demonstrated, such as push, pop, shift, unshift, and slice.

//Object Properties:

const person = {
  name: "John",
  age: 25,
};

console.log(person.name);  // Outputs: John
person.job = "Developer";   // Adding a new property
console.log(person);        // Outputs: { name: 'John', age: 25, job: 'Developer' }
//Objects are collections of key-value pairs. In this example, the person object has properties name and age. Properties can be accessed using dot notation (person.name) or added dynamically (person.job).


//Exempel lite mer avancerad

//we'll build a simple program that manages a list of books using an array of objects.

//HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Manager</title>
</head>
<body>
    <h1>Book Manager</h1>

    <!-- Input for book information and buttons for actions -->
    <label for="titleInput">Title:</label>
    <input type="text" id="titleInput" placeholder="Enter book title">

    <label for="authorInput">Author:</label>
    <input type="text" id="authorInput" placeholder="Enter author name">

    <button onclick="addBook()">Add Book</button>
    <button onclick="displayBooks()">Display Books</button>

    <!-- Display area for the list of books -->
    <ul id="bookList"></ul>

    <!-- Include the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>


//JavaScript:

// Array to store books

let books = [];

// Function to add a new book
function addBook() {
    // Get book information from input fields
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;

    // Check if both title and author are provided
    if (title.trim() !== '' && author.trim() !== '') {
        // Create a book object and add it to the books array
        const newBook = { title: title, author: author };
        books.push(newBook);
        alert('Book added successfully!');
    } else {
        alert('Please provide both title and author.');
    }
}

// Function to display the list of books
function displayBooks() {
    const bookListElement = document.getElementById('bookList');
    
    if (books.length === 0) {
        bookListElement.innerHTML = '<li>No books available.</li>';
    } else {
        // Use a for loop to iterate through the books array
        let bookListHTML = '';
        for (let i = 0; i < books.length; i++) {
            // Access the properties of each book object
            const title = books[i].title;
            const author = books[i].author;
            bookListHTML += `<li>${title} by ${author}</li>`;
        }
        bookListElement.innerHTML = bookListHTML;
    }
}


Explanation:


HTML:

<!DOCTYPE html>: Declares the HTML document type and version.

<html lang="en">: Defines the root element of the HTML document with the language attribute set to English.

<head>: Contains metadata about the HTML document.

<meta charset="UTF-8">: Specifies the character encoding of the document as UTF-8.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Sets the viewport properties for responsive design.

<title>Book Manager</title>: Sets the title of the HTML document.

<body>: Contains the content of the HTML document.

<h1>Book Manager</h1>: Defines a top-level heading.

<label for="titleInput">Title:</label>: Creates a label for the book title input field.

<input type="text" id="titleInput" placeholder="Enter book title">: Creates an input field for entering the book title.

<label for="authorInput">Author:</label>: Creates a label for the author input field.

<input type="text" id="authorInput" placeholder="Enter author name">: Creates an input field for entering the author's name.

<button onclick="addBook()">Add Book</button>: Creates a button that calls the addBook function when clicked.

<button onclick="displayBooks()">Display Books</button>: Creates a button that calls the displayBooks function when clicked.

<ul id="bookList"></ul>: Creates an unordered list with the ID "bookList" to display the list of books.

<script src="script.js"></script>: Links the HTML document to the JavaScript file (script.js).


JavaScript:
let books = [];: Declares an array to store books using the let keyword.

function addBook() {: Defines a function named addBook.

Retrieves book information from the input fields and assigns them to the variables title and author.
Checks if both title and author are provided using an if statement.
Creates a book object with properties title and author and adds it to the books array.
Displays an alert based on the success or failure of adding a book.
function displayBooks() {: Defines a function named displayBooks.

Retrieves the HTML element with the ID "bookList" and assigns it to the constant variable bookListElement.
Checks if there are no books and updates the content of bookListElement with a message.
If there are books, uses a for loop to iterate through the books array, accessing the properties of each book object and updating bookListElement with the generated HTML.
Inside the for loop in displayBooks:

for (let i = 0; i < books.length; i++): Initializes a loop variable i to 0, repeats the loop while i is less than the length of books, and increments i in each iteration.
const title = books[i].title;: Accesses the title property of the current book object in the iteration.
const author = books[i].author;: Accesses the author property of the current book object in the iteration.
bookListHTML += <li>${title} by ${author}</li>;: Concatenates an HTML list item string with the book information to bookListHTML in each iteration.
This example demonstrates the use of arrays and objects in managing a list of books. Each book is represented as an object with properties title and author, and the books are stored in an array. Functions are used to add books and display the list of books, and a for loop is employed to iterate through the array.





