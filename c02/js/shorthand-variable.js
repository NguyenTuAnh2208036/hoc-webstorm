// METHOD 1
var price = 5;
var quantity = 14;
var total = price * quantity;
/* METHO 2
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
 */
/* METHO 3
var price = 5, quantity = 14;
var total = price * quantity;
 */
// Write the total into the element with id of cost
var el = document.getElementById(elementld :'cost');
// Gets the element with on id of cost
el.textContent = '$' + total;
// Replaces the content of this element
/* Note : textContent does not work in IE8 or earlier
You con use innerHTML on line 20, but note the security issues on p228-231
el.innerHTML = '$' + total;
 */