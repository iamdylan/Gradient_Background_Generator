let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let jscolor1 = document.getElementById("color1");
let jscolor2 = document.getElementById("color2");

let col1 = 'ffffff';
let col2 = '000000';

function setGradient1(jscolor) {
	// document.write(jscolor);
	col1 = jscolor;
	// document.write(col1);
	body.style.background = 
	"linear-gradient(to right, " 
	+ '#' + jscolor
	+ ", " 
	+ '#' + col2
	+ ")";

	css.textContent = body.style.background + ";";
}


function setGradient2(jscolor) {
	col2 = jscolor;
	body.style.background = 
	"linear-gradient(to right, " 
	+ '#' + col1
	+ ", " 
	+ '#' + jscolor
	+ ")";

	css.textContent = body.style.background + ";";
}

jscolor1.addEventListener("input", setGradient1);
jscolor2.addEventListener("input", setGradient2);
