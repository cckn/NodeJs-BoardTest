import { Gpio } from 'onoff'

const ledList = [
    { name: 'LED_GW_STATE', pin: 9 },
    { name: 'LED_LAN9514', pin: 10 },
    { name: 'LED_LAN9512', pin: 11 },
    { name: 'LED_RS485_PB', pin: 21 },
    { name: 'LED_RS485_A', pin: 22 },
    { name: 'LED_RS485_B', pin: 23 },
    { name: 'LED_WIRELESS', pin: 24 },
]

const gpio = () => {
    ledList.forEach((led, idx, array) => {
        array[idx].gpio = new Gpio(led.pin, 'out')
    })

    let ledState = false
    setInterval(() => {
        ledState = !ledState
        ledList.forEach(led => {
            led.gpio.writeSync(ledState ? 1 : 0)
        })
    }, 500)
}

export default gpio

if (require.main === module) {
    gpio()
}
