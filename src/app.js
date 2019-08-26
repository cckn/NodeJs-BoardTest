import * as Serial from './serial'
import * as Led from './leds'

const app = () => {
    init()

    setInterval(() => {
        toggleLeds()
    }, 1000)

    let count = 0
    setInterval(() => {
        rs485Test(count++)
    }, 10)
}
const init = () => {
    Serial.init()
}

const toggleLeds = () => {
    Led.interfaceKeys.forEach(key => {
        const led = Led.interfaces[key]
        Led.toggle(led)
    })
}

const rs485Test = count => {
    Serial.interfaceKeys.forEach(key => {
        const serial = Serial.interfaces[key]
        serial.write(`${key} :: ${count}\n`)
    })
}

export default app
