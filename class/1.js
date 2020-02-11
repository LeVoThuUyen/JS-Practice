// get the elements by html attribute
// => tra ve 1 mang nhieu phan  tu 
var x = document.getElementsByClassName('card-text');
for (var i = 0; i < x.length; i++) {
	x[i].innerHTML = "This text was written in js file";
}
console.log(x);
console.log(x.length);

var y = document.getElementsByClassName('card-title');
for (var i = 0; i < y.length; i++) {
	y[i].innerHTML = "Tadddd!!";
}
console.log(y.length);