document.addEventListener("DOMContentLoaded",function(){
	var nut = document.getElementById('nuthieuung');
	var khoi = document.getElementById('kcd');
	var trangthai = "lan1";
	nut.onclick =function(){
		if (trangthai=="lan1") {
			console.log("Click lan 1");
			trangthai = "lan2";
			khoi.classList.remove("nomove");
			khoi.classList.add("way1");
		}
		else if (trangthai="lan2") {
			console.log("Click lan 2");
			trangthai = "lan1";
			khoi.classList.remove("way1");
		}

	}
},false);