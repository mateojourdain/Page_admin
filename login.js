document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validation du formulaire (exemple basique)
    if (username === "admin" && password === "password") {
        document.getElementById("message").textContent = "Login successful!";
        // Redirection vers une autre page, par exemple :
        // window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").textContent = "Invalid username or password.";
    }
});