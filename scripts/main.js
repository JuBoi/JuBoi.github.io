var pietro = document.getElementById('pietro');

var heading = document.getElementById('heading');

var i = 0;
var size = 300;

pietro.onclick = function() {
	if(i == 0) {
		size -= 20;
		heading.innerHTML = "CLICK ME";
		pietro.style.width = String(size) + "px";
		pietro.style.height = String(size) + "px";
	}
	else {
		size -= 20;
		heading.innerHTML = heading.innerHTML + " MORE";
		pietro.style.width = String(size) + "px";
		pietro.style.height = String(size) + "px";
	}
	if(i > 9) {
		pietro.src = "images/valentine.jpg"
		pietro.style.width = "400px";
		pietro.style.height = "400px";
		heading.innerHTML = "hey sweetcheeks"
	}
	i++;
}
