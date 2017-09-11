const piano = createPiano()

window.addEventListener("keydown", function (event) {
    const key = event.key
    if (key === 'PageUp') {
        piano.octaveUp()
    } else if (key === 'PageDown') {
        piano.octaveDown()
    } else if (key === ' ') {
        piano.pedalDown()
    } else {
        piano.play(key)
    }
}, false)

window.addEventListener("keyup", function (event) {
    const key = event.key
    if (key === ' ') {
        piano.pedalUp()
    } else {
        piano.stop(key)
    }
}, false)

