hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.Two) < 5) {
        hummingbird.setLED(ThreePort.Three, 100)
        basic.pause(3000)
        hummingbird.setLED(ThreePort.Three, 0)
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.Three) > 0) {
        hummingbird.setPositionServo(FourPort.Two, 180)
        basic.pause(4000)
        hummingbird.setPositionServo(FourPort.Two, 90)
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.One) > 75) {
        hummingbird.setPositionServo(FourPort.One, 155)
        basic.pause(2000)
        hummingbird.setPositionServo(FourPort.One, 180)
        basic.pause(1000)
    }
})
