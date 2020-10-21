music.playMelody("A F A G B F A B ", "Hallo Hendrik und Maraiake".length)
basic.showLeds(`
    . # # . .
    . # # # .
    . . # # .
    . # . . #
    # # . . #
    `)
basic.showLeds(`
    # . # # #
    # . # . #
    # . . # #
    # . . . .
    # # # . #
    `)
basic.showLeds(`
    # . # # #
    . . # . #
    # . . # #
    . . # . #
    # # # . #
    `)
images.createBigImage(`
    # # # # . . . . . #
    . . # . # . . . # .
    # # # # . # # . . .
    # . # # . # . # # .
    . # . # # # . . . #
    `).scrollImage(0, 200)
basic.showIcon(IconNames.Meh)
basic.showLeds(`
    # # # # .
    # . # # .
    # . # # #
    # # . . #
    . . . # .
    `)
basic.showIcon(IconNames.Meh)
music.playMelody("C G A A B B C5 C5 ", 120)
