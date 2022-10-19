$('li[id!="one"]').hide().delay(500).fadeIn(1400); // Semi-colon indicates end of chaining - can be write on separate lines
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');