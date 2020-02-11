document.addEventListener("DOMContentLoaded",function(){
	var btn = document.getElementsByClassName('btn');
	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = function(){
		var pw = this.getAttribute('data-password');
		console.log(pw);
		}
	}
},false);