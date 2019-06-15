var pokeball = document.getElementById('pokeball');

var heading = document.getElementById('heading');
var i = 0;

smaller() {
	pokeball.style.width *= .9;
	pokeball.style.height *= .9;
}

pokeball.onclick = function() {
	if(i == 0) {
		heading.innerHTML = "CLICK ME";
		smaller();
	}
	else {
		heading.innerHTML = heading.innerHTML + " MORE";
		smaller();
	}
	if(i > 9) {
		pokeball.src = "images/halle.jpg"
		heading.innerHTML = "the best player"
	}
	i++;
}
