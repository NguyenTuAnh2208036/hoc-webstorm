// Create variables to hold the title and note text.
var username;
var message;
//Assign values to these variables.
username = 'Molly';
message = 'See our upcoming range';
// Get the element with an id of name.
var elName = document.getElementById( elementld :'name');
// Replace the content of this element.
elName.textContent = username;
// Get the element with on id of note.
var elNote = document.getElementById( elementld :'note');
// Replace the content of this element.
elNote.textContent = message;
/*
Note : textContent does not work in IE8 or earlier
You can use innerHTML on line 12, but note the security issues on p228-231
elName.innerHTML = username;
elNote.innerHTML = message;
 */