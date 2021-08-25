basic.showLeds(`
    . # . # .
    # # # # #
    . # # # .
    . . # . .
    . . . . .
    `)
music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.ForeverInBackground)
basic.forever(function () {
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().show()
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(500)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(500)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(1000)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(1000)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(200)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(200)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(500)
})
