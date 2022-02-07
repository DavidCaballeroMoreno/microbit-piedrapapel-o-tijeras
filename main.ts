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
    } else if (Jugada == 2) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            # # . # #
            # # . # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
