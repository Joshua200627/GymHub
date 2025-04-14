// Show login modal
function openLoginModal() {
    document.getElementById("auth-overlay").classList.add("active");
    document.getElementById("login-modal").classList.add("active");
    document.getElementById("signup-modal").classList.remove("active");
}

// Show signup modal
function switchToSignup() {
    document.getElementById("login-modal").classList.remove("active");
    document.getElementById("signup-modal").classList.add("active");
}

// Show login modal from signup
function switchToLogin() {
    document.getElementById("signup-modal").classList.remove("active");
    document.getElementById("login-modal").classList.add("active");
}

// Close all modals
function closeAuthModals() {
    document.getElementById("auth-overlay").classList.remove("active");
    document.querySelectorAll(".auth-modal").forEach(modal => modal.classList.remove("active"));
}

// Handle Login Form
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email && password) {
        alert("Login successful!");
        closeAuthModals();
        window.location.href = "index.html"; // redirect to homepage
    } else {
        alert("Please enter email and password");
    }
});

// Handle Signup Form
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const birthday = document.getElementById("signup-birthday").value;
    const phone = document.getElementById("signup-phone").value;
    const gender = document.getElementById("signup-gender").value;
    const fitnessGoal = document.getElementById("signup-fitness-goal").value;
    const password = document.getElementById("signup-password").value;

    // Required fields validation
    if (name && email && birthday && password) {
        // Store user information (in a real app, this would be sent to a server)
        const userInfo = {
            name,
            email,
            birthday,
            phone,
            gender,
            fitnessGoal,
            registrationDate: new Date().toISOString()
        };
        
        // For demo purposes, we'll just log the user info to console
        console.log("New user registered:", userInfo);
        
        alert("Account created successfully!");
        closeAuthModals();
        window.location.href = "index.html"; // redirect to homepage
    } else {
        alert("Please fill in all required fields");
    }
});

// Close modal when clicking outside
document.getElementById("auth-overlay").addEventListener("click", closeAuthModals);

// Close modal with close buttons
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", closeAuthModals);
});

// Optional: Trigger login modal for demo/testing
// document.getElementById("login-button").addEventListener("click", openLoginModal);
