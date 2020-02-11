
//This is the document ready function, which means it will be loaded the JS file after the html file
document.addEventListener("DOMContentLoaded",function() {
	// body...
	var x = document.getElementById('n1');
	console.log(x);
	x.onclick = function () {
		console.log('Ban vua click vao' + x);
		x.classList.add('godown');
		// body...
	}
}, false)