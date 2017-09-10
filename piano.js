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

const piano = createPiano()

window.addEventListener("keydown", function (event) {
    const key = event.key
    if (key === 'PageUp') {
        piano.octaveUp()
    } else if (key === 'PageDown') {
        piano.octaveDown()
    } else {
        piano.play(key)
    }
}, false)

window.addEventListener("keyup", function (event) {
    piano.stop(event.key)
}, false)

