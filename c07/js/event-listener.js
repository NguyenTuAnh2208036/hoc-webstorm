function checkUsername() {    // Declore function
    var elMsg = document.getElementById('feedback');  // Get feedbock element
    if (this.value.length < 5) {         // If username too short
        elMsg.textContent = 'Username must be 5 character or more';  // Set msg
    }   else {                      // Otherwise
        elMsg.textContent = '';     // Clear msg
    }
}

var elUsername = document.getElementById('username');     // Get username input
// When it loses focus coll checkUsername()
elUsername.addEventListener('blur', checkUsername, 'false');