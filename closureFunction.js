//anonymous == khong ten
var z = function (x,y) {
	// Thuong khong goi duoc ra ma gan vao bien luon
	return (x+y)/2;
}
z(2,4);
console.log(z(2,4));

//closure == dong
/*function chao() {
	var ten = "Uyen";//Khai bao bien
	return function () { // Khai bao ham
		console.log("Cafe khong " + ten);
		// function la ham tao ra bien va ham trong khu vuc ben trong no. 
		// Ham ben trong co the su dung bien ben ngoai ham do ma van trong vung dong

	} 
}
var h = chao();// goi lai ham chao()
h();*/

function chao() {
	var ten = "Uyen";//Khai bao bien
	var thongbao =  function () { // Khai bao ham
		console.log("Cafe khong " + ten);
		// function la ham tao ra bien va ham trong khu vuc ben trong no. 
		// Ham ben trong co the su dung bien ben ngoai ham do ma van trong vung dong
		}
	ten = ten + " - tot tinh ";
	return thongbao;// chi chay va dung chuong trinh khi gap return
}
var h = chao();// goi lai ham chao()
h();