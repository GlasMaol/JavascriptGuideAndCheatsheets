
Cheatsheet

HTML:
<form id="myForm">
  <input type="text" id="name" required>
  <input type="submit">
</form>


JavaScript:
document.getElementById('myForm').addEventListener('submit', function(event) {
  let name = document.getElementById('name').value;
  
  if (name === '') {
    alert('Name cannot be empty!');
    event.preventDefault(); // prevents form from submitting
  }
})


Form Validation

Example 1: Checking if a Text Input is Not Empty

html

<input type="text" id="username" required>
//This input field is required, meaning the user must fill it out before submitting the form. The required attribute helps ensure that the field is not empty.


Example 2: Checking if a Password is Not Empty
html

<input type="password" id="password" required>
Similar to Example 1, this input field is required, ensuring that the user provides a non-empty password.


Example 3: Using JavaScript to Check Username and Password
javascript

function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill out all fields.');
        return false;
    }

    // Other validation checks can be added here...

    alert('Form submitted successfully!');
    return true;
}
//This JavaScript function checks if the username and password are not empty. If either is empty, it displays an alert and prevents form submission.


Example 4: Checking Password Length
javascript

function validateForm() {
    const password = document.getElementById('password').value;

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    // Other validation checks can be added here...

    alert('Form submitted successfully!');
    return true;
}
This modification to the previous example checks if the password is at least 6 characters long.


Example 5: Email Validation

html

<input type="email" id="email" required>
This input field is of type "email," which means it expects a valid email address. The required attribute ensures it is not empty.


Example 6: Using Regular Expressions for Email Validation
javascript

function validateForm() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Other validation checks can be added here...

    alert('Form submitted successfully!');
    return true;
}
//This JavaScript function uses a regular expression (emailRegex) to validate that the entered email address has a valid format.

//These examples cover different aspects of form validation, including checking for non-empty fields, password length, and email format. You can combine and customize these techniques based on your specific form validation requirements.