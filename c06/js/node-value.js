var itemTwo = document.getElementById('two'); // Get second list item
var elText = itemTwo.firstChild.nodeValue; // Get its text content
elText = elText.replace('pine nuts','kale');  // Change pine nuts to kale
itemTwo.firstChild.nodeValue = elText;  // Update the list item