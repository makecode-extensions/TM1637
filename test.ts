let tm: TM1637.TM1637LEDs = null
let item = 0
item = 0
tm = TM1637.create(
DigitalPin.P13,
DigitalPin.P14,
7,
4
)
tm.showNumber(1234)
tm.showDP(1, true)
tm.intensity(2)
basic.pause(1000)
tm.intensity(8)
basic.pause(1000)
basic.forever(() => {
    tm.showNumber(item)
    item += 1
    basic.pause(1000)
})
