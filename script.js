//your JS code here. If required.
let x = document.documentElement.clientWidth
let y = document.documentElement.clientHeight
function getResize(){
	document.getElementById("sizeInfo").innerHTML = "<h1>Width: "+x+" and"+" Height: "+y+"</h1>"
}