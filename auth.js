// Register User
function registerUser() {
    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    // Check if user exists
    if (localStorage.getItem(username)) {
        alert("User already exists!");
        return;
    }

    // Store user
    localStorage.setItem(username, password);
    alert("Account created successfully!");
    window.location.href = "login.html";
}

// Login User
function loginUser() {
    const username = document.getElementById("logUser").value;
    const password = document.getElementById("logPass").value;

    const storedPass = localStorage.getItem(username);

    if (storedPass === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}