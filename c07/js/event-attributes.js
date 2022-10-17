function checkUsername() {                // Declore function
    var elMsg = document.getElementById('feedback');  // Get feedback element
    var elUsername = document.getElementById('username');  // Get username input
    if (elUsername.value.length < 5) {           // If username too short
        elMsg.textContent = 'username must be 5 characters or more'; // Set msg
    }   else {                            // Otherwise
        elMsg.textContent = '';           // Clear message
    }
}