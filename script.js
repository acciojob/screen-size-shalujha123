//your JS code here. If required.
let w = document.documentElement.clientWidth
let h = document.documentElement.clientHeight
function getResize(){
	document.getElementById("sizeInfo").innerHTML = "<h1>Width: "+w+" and"+" Height: "+h
}