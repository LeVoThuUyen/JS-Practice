document.addEventListener("DOMContentLoaded",function(){
	
	//khai bao
	var tg = document.getElementsByClassName('icon');
	var icon = tg[0];
	var list = document.getElementsByClassName('list');
	var list = list[0];
	
	//use onclick and toggle to change the icon
	icon.onclick = function(){
		this.classList.toggle('whiteicon');
		list.classList.toggle('ra');
	}
},false);