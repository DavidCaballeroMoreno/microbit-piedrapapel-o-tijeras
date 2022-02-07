let Jugada = 0
input.onGesture(Gesture.Shake, function () {
    Jugada = randint(1, 3)
    if (Jugada == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (Jugada == 2) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            # # . # #
            # # . # #
            `)
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(659, music.beat(BeatFraction.Quarter))
    }
})
