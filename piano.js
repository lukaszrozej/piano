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
const keys = {
    "z": 1,
    "s": 2,
    "x": 3,
    "d": 4,
    "c": 5,
    "v": 6,
    "g": 7,
    "b": 8,
    "h": 9,
    "n": 10,
    "j": 11,
    "m": 12,
    "q": 13,
    "2": 14,
    "w": 15,
    "3": 16,
    "e": 17,
    "r": 18,
    "5": 19,
    "t": 20,
    "6": 21,
    "y": 22,
    "7": 23,
    "u": 24,
    "i": 25,
    "9": 26,
    "o": 27,
    "0": 28,
    "p": 29
};

window.addEventListener("keydown", function (event) {
    const key = event.key
    if(!down[key]) {
        down[key] = true
        if(keys[key]){
            getSound(key).play();
        }
    }
}, false);

window.addEventListener("keyup", function (event) {
    const key = event.key
    down[key] = false;
    if(keys[key]){
        getSound(key).stop();
    }
}, false);

