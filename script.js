var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");
var switchCol = document.getElementById("switchColors");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";
}

function switchColors() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color2.value + ", " 
	+ color1.value + ")";
	var temp = color2.value
	color2.value = color1.value;
	color1.value = temp;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

switchCol.addEventListener("click", switchColors)