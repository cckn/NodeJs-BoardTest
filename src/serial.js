import SerialPort from 'serialport'
import Readline from '@serialport/parser-readline'

const interfaces = {
    rs485a: new SerialPort('/dev/ttyUSB0', { baudRate: 9600 }),
    rs485b: new SerialPort('/dev/ttyUSB1', { baudRate: 9600 }),
    rs485c: new SerialPort('/dev/serial0', { baudRate: 9600 }),
    dbg: new SerialPort('/dev/ttyUSB3', { baudRate: 9600 }),
}
const interfaceKeys = Object.keys(interfaces)

const init = () => {
    interfaceKeys.forEach(key => {
        const serial = interfaces[key]

        const parser = serial.pipe(new Readline({ delimiter: '9' }))
        serial.on('open', line => console.log(`${key} open`))

        parser.on('data', line => console.log(`> ${key} :// ${line}`))
        serial.write(`${key} Connect \n`)
    })
}

const write = (serial, payload) => {
    serial.write(payload)
}

export { interfaces, interfaceKeys }
export { init, write }
