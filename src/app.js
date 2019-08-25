import * as serial from './serial'
import * as leds from './leds'

const app = () => {
    init()
    toggleLeds()
    serial.write(serial.interfaces.rs485a, 'test?')
}
const init = () => {
    serial.init()
}

const toggleLeds = () => {
    setInterval(() => {
        leds.interfaceKeys.forEach(ledName => {
            const led = leds.interfaces[ledName]
            leds.toggle(led)
        })
    }, 300)
    console.log('Hello!')
}
export default app
