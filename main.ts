basic.forever(function () {
    if (input.lightLevel() > 20) {
        basic.showString("EGUN ON")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 20) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(1000)
    }
})
