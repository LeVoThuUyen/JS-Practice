var a = document.querySelectorAll('.card .blockquote');
// console.log(a);
// return a node list
for (var i = 0; i < a.length; i++) {
	console.log(a[i]);
}
// The way to call in querySelector is use the CSS call as casual
// Can call as the way data - attribute
var c = document.querySelectorAll("[data-notice]");
console.log(c);