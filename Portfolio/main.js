AOS.init();



function validateForm() {
    // Get values from the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple validation logic
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    // Additional validation logic can be added here

    // Allow form submission if all validations pass
    return true;
}