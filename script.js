var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ getRandomRgb() 
	+ ", " 
	+ getRandomRgb() 

	css.textContent = body.style.background + ";";


}



function grad2() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
}




	function getRandomRgb() {
	var num = Math.round(0xffffff * Math.random());
	var r = num >> 16;
	var g = num >> 8 & 255;
	var b = num & 255;
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';

  }
  
  

 	var button = document.createElement('BUTTON');
	var text = document.createTextNode("Button");
	button.appendChild(text);
	body.appendChild(button); 

	button.addEventListener("click", setGradient);

	



	body.onload = setGradient;
	color1.addEventListener("input", grad2);
 	color2.addEventListener("input", grad2);