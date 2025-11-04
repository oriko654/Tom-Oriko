//credential for demo purpose
let user = "admin";
let pass = "12345";

function login() {
    // Get the values from the form
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // Validate the input
    if (username === '' || password === '') {
        window.alert("Username and password cannot be empty");
        return;
    }
    // Check if the username and password match the predefined values
    if (username === user && password === pass) {
        window.alert("Login Successful"); //output
        return;
    }
    else {
        // If the credentials are correct, proceed with the login
        window.alert("Invalid username or password. Please try again.");
        // Redirect to the dashboard or home page
    }

}
// Function to handle the registration process
function registerUser() {
    // Get the values from the registration form
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    // Validate the input
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        window.alert("All fields are required");
        return;
    }
    if (password !== confirmPassword) {
        window.alert("Passwords do not match");
        return;
    }
    
    // Simulate registration success
    window.alert("Registration Successful");
    // Redirect to the login page or dashboard
    window.location.href = "login.html";

    //password strength validation
    let passwordStrength = document.getElementById("password_strength");
    if (password.length < 6) {
        passwordStrength.textContent = "Weak";
        passwordStrength.style.color = "red";
    } else if (password.length < 12) {
        passwordStrength.textContent = "Moderate";
        passwordStrength.style.color = "orange";
    } else {
        passwordStrength.textContent = "Strong";
        passwordStrength.style.color = "green";
    }
}