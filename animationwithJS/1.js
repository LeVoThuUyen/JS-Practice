//Call the button

document.addEventListener('DOMContentLoaded',function(){
	var btn = document.getElementById('btn1');
	var block = document.getElementsByClassName('card');
	btn.onclick=function(){
		block[0].classList.toggle('goright');
		
	}
},false)