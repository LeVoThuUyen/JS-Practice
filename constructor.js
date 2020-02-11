// Su dung ham constructor khi thao tac voi kieu du lieu doi tuong

// console.log(cacmonan);
// var monanso2 = cacmonan;//gan gia tri - Dung chung vung nho
// monanso2.ten = "Bo cuon la lot";// Doi ca thanh phan ten cacmonan va monanso2
// khai bao ham constructor
function Monan(ten, nl, gia) {
	this.ten = ten;
	this.nl = nl;
	this.gia = gia;
}//tao ra khung du lieu - ham constructor
var mon1 = new Monan('rau xao','rau muong', 900)
console.log(mon1);

