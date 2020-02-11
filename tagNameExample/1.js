var allTittle = document.getElementsByTagName('h5');
console.log(allTittle);
for (var i = 0; i < allTittle.length ; i++) {
	allTittle[i].innerHTML = "<button class ='btn btn-info'>Tiltle</button>";
}

