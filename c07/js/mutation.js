var elList, addLink, newEL, newText, counter, listItem;    // Declare variable

elList = document.getElementById('list');          // Get list
addLink = document.querySelector('a');            // Get add item button
counter = document.getElementById('counter');     // Get item counter

function addItem(e) {              // Declare function
    e.preventDefault();            // prevent link action
    newEL = document.createElement('li');         // New <li> element
    newText = document.createTextNode('New list item');  // New text node
    newEL.appendChild(newText);    // Add text to <li>
    elList.appendChild(newEL);     // Add <li> to list
}

function updateCount() {           // Declare dunction
    listItem = elList.getElementsByTagName('li').length;  // Get total of <li>s
    counter.innerHTML = listItem;  // Update counter
}

addLink.addEventListener('click', addItem, false);    // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false);   // DOM updated