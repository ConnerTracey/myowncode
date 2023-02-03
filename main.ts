function Starting () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Shake To Play!")
    OLED.drawLoading(0)
    control.waitMicros(2000)
    OLED.drawLoading(50)
    control.waitMicros(2000)
    OLED.drawLoading(100)
}
function Reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Restarting Game")
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    let InRound = 0
    OLED.init(128, 64)
    if (!(InRound)) {
        Reset()
    }
})
Starting()
