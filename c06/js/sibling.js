// Select the starting point and find its sibling
var startItem = document.getElementById('two');
var prevItem = startItem.previousElementSibling;
var nextItem = startItem.nextSibling;

// Change the values of the siblings class attribute
prevItem.className = 'complete';
nextItem.className = 'cool';