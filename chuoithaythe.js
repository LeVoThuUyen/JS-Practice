//templateString
//Vi sao phai su dung ? -
var x = "Uyen";
var y = " 22 tuoi";

console.log("Xin chao " + x + "!"
	+ " co phai chi " + y + "Hay khong"); 

var z = " Beo the em";

var comment = " <div class = 'cm-2>" + z + "</div>";
// cach viet cmt va cmt2 khac nhau nhung trinh bay giong nhau
var comment2 = `<div class = 'cm-2'> 
				<h2 class ='tieu de'>ABC</h2>
				${z} 
				</div>`;
console.log(comment2);
