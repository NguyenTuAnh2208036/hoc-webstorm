// Create variables to hold the title and note text
var title;
var message;
//Assign values to these variables.
title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25% off!</a>';
// Get the element with an id of title.
var elTitle = document.getElementById( elementld: 'title');
// Replace the content of this element.
elTitle.textContent = title;
// Get the element with on id of note.
var elNote = document.getElementById( elementld :'note');
// Replace the content of this element.
elNote.innerHTML = message;
/*
Note : textContent does not work in IE8 or earlier
You can use innerHTML on line 12, but note the security issues on p228-231
elTitle.innerHTML = title;
innerHTML is used on line 17 because it is adding markup (not just text)
 */