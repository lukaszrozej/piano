var down = {
    "z": false,
    "s": false,
    "x": false,
    "d": false,
    "c": false,
    "v": false,
    "g": false,
    "b": false,
    "h": false,
    "n": false,
    "j": false,
    "m": false,
    "q": false,
    "2": false,
    "w": false,
    "3": false,
    "e": false,
    "r": false,
    "5": false,
    "t": false,
    "6": false,
    "y": false,
    "7": false,
    "u": false,
    "i": false,
    "9": false,
    "o": false,
    "0": false,
    "p": false
};

window.addEventListener("keydown", function (event) {
	if(!down[event.key]) {
		down[event.key] = true;
		console.log("DOWN: " + event.key + "  " + event.keyCode);
	}
	// sounds[0].play();
}, false);

window.addEventListener("keyup", function (event) {
	down[event.key] = false;
	console.log("  UP: " + event.key + "  " + event.keyCode);
	// sounds[0].play();
}, false);

