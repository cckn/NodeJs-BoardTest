import serial from './serial'
import gpio from './gpio'

const app = () => {
    serial()
    gpio()
    console.log('Hello!')
}

export default app
