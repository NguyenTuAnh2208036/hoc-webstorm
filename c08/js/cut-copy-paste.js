$(function () {
    var $p = $('p');

    // Create a clone of the <p> element and add it after the <h2> element
    var $clonedQuate = $p.clone();
    $p.remove();
    $clonedQuate.insertAfter('h2');

    // Remove first item, and add it to the nd of the list
    // Note how this happens in both lists
    var $removeItem = $('#one').detach();
    $moveItem.appendTo('ul');

});