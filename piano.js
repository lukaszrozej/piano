window.addEventListener("keydown", function (event) {
	console.log("DOWN: " + event.key + "  " + event.keyCode);
	// sounds[0].play();
}, false);

window.addEventListener("keyup", function (event) {
	console.log("  UP: " + event.key + "  " + event.keyCode);
	// sounds[0].play();
}, false);

