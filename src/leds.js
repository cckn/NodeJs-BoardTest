import { Gpio } from 'onoff'

const interfaces = {
    gwState: new Gpio(9, 'out'),
    lan9514: new Gpio(10, 'out'),
    lan9512: new Gpio(11, 'out'),
    rs485Pb: new Gpio(21, 'out'),
    rs485A: new Gpio(22, 'out'),
    rs485B: new Gpio(23, 'out'),
    wireless: new Gpio(24, 'out'),
}
const interfaceKeys = Object.keys(interfaces)

const on = led => {
    led.writeSync(1)
}
const off = led => {
    led.writeSync(0)
}

const get = async led => {
    return await led.read()
}

const toggle = async led => {
    const prevState = await get(led)
    led.writeSync(prevState ? 0 : 1)
}

export { interfaces, interfaceKeys }
export { on, off, get, toggle }
