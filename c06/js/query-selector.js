// QuerySelector only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

// QuerySelectorAll returns a NodeList
// the third li element is then selected and changed
var els = document.querySelectorAll('li.hot');
els[1].className = ' cool';