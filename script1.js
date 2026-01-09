// Get existing users from localStorage or create empty array
let users = JSON.parse(localStorage.getItem("users")) || [];

// Sign Up function
function signup() {
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;

    if (username === "" || password === "") {
        displayMessage("Please enter both username and password", "red");
        return;
    }

    // Check if username already exists
    let userExists = users.find(user => user.username === username);
    if (userExists) {
        displayMessage("Username already exists. Choose another.", "red");
        return;
    }

    // Add new user to array
    users.push({username, password});
    localStorage.setItem("users", JSON.stringify(users));
    displayMessage("Sign Up Successful! You can now login.", "green");

    // Clear input fields
    document.getElementById("signupUsername").value = "";
    document.getElementById("signupPassword").value = "";
}

// Login function
function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        displayMessage("Please enter both username and password", "red");
        return;
    }

    let validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        displayMessage(`Login Successful! Welcome, ${username}`, "green");
    } else {
        displayMessage("Invalid username or password", "red");
    }

    // Clear input fields
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
}

// Display messages
function displayMessage(msg, color) {
    let messageDiv = document.getElementById("message");
    messageDiv.style.color = color;
    messageDiv.textContent = msg;
}
