
var price = [1,1,1,1,2,2,2,2,3,3,3,3];
var pizza1 = [5,6,7,9,10,12]; 
var pizza2 = [1,8,10,12];
var pizza3 = [1,5,6,7];

var basicval;
var currentsizestate = 2;


function pizzarun(price,pizzatype){
	
	basicval = parseInt(price);
	document.getElementById("total").value = price;
	document.getElementById("medium").checked = true;

	var i;
for(i = 1; i <= 12; i++ ){
document.getElementById(i.toString()).checked = false;
}
var mypizza;
if(pizzatype == "pizza1"){
mypizza = pizza1;
}
else if(pizzatype == "pizza2"){
mypizza = pizza2;
}
else{
mypizza = pizza3;
}
for(i = 0; i < mypizza.length; i++ ){
document.getElementById(mypizza[i].toString()).disabled = true;
}




}
function sizerun(inp,sizestate){
	if(sizestate != currentsizestate){
		currentsizestate = sizestate;
		document.getElementById("total").value =  basicval + inp;
	}

}


function runTotal(addingprice, myid){
if(document.getElementById(myid.toString()).checked == false){
		document.getElementById("total").value = parseInt(document.getElementById("total").value) - addingprice;
}	
else{
	document.getElementById("total").value = parseInt(document.getElementById("total").value) + addingprice;
}
}










