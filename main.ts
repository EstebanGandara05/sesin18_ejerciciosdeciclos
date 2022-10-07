function carotas () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Happy)
}
input.onButtonPressed(Button.A, function () {
    for (let contador = 0; contador <= 10; contador++) {
        basic.showNumber(contador)
    }
    carotas()
})
input.onButtonPressed(Button.AB, function () {
    index = 1
    while (contador <= 10) {
        basic.showNumber(contador)
        contador += 2
    }
    carotas()
})
input.onButtonPressed(Button.B, function () {
    index = 2
    while (contador <= 10) {
        basic.showNumber(contador)
        contador += 2
    }
    carotas()
})
let contador = 0
let index = 0
let aleatorio = randint(5, 10)
basic.showNumber(aleatorio)
for (let contador = 0; contador <= aleatorio; contador++) {
    basic.showNumber(contador)
    for (let index2 = 0; index2 < contador; index2++) {
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
        basic.pause(200)
    }
}
