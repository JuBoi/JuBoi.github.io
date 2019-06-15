var pokeball = document.getElementById('pokeball');

var heading = document.getElementById('heading');

var i = 0;
var size = 300;

pokeball.onclick = function() {
	if(i == 0) {
		size -= 20;
		heading.innerHTML = "CLICK ME";
		pokeball.style.width = String(size) + "px";
		pokeball.style.height = String(size) + "px";
	}
	else {
		size -= 20;
		heading.innerHTML = heading.innerHTML + " MORE";
		pokeball.style.width = String(size) + "px";
		pokeball.style.height = String(size) + "px";
	}
	if(i > 9) {
		pokeball.src = "images/halle.jpg"
		pokeball.style.width = "400px";
		pokeball.style.height = "400px";
		heading.innerHTML = "the best player"
	}
	i++;
}
