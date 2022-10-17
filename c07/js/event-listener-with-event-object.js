function checkLength (e, minLength) {      // Declore function
    var el, elMsg;                         // Declore variables
    if (!e) {                              // If event object doesn't exist
        e = window.event;                  // Use IE fallback
    }
    el = e.target || e.srcElement;         // Get target of event
    elMsg = el.nextSibling;                // Get its next sibling

    if (el.value.length < minLength) {     // If length is too short set msg
        elMsg.innerHTML = 'Usename must be' + minLength + 'characters or more';
    }   else {                             // Otherwise
        elMsg.innerHTML = '';              // Clear message
    }
}
var elUsername = document.getElementById('username');                   // Get username input
if (elUsername.addEventListener) {                                               // If event listener supported
    elUsername.addEventListener('blur', function (e) {     // On blur event
        // NOTE : This function is checkLength() - not checkUsername()
        checkLength(e,5);                                               // call checkLength()
    }, false);                                                            // Capture in bubble phase
}   else {                                                                       // Otherwise
    elUsername.attachEvent('onblur', function (e) {                              // IE fallback onblur
        // NOTE : This function is checkLength() - not checkusername()
        checkLength(e,5);                                               // Call checkLength()
    });
}
// checkLength()