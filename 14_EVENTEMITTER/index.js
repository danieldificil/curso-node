const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () =>
{
    console.log('DURANTE...')
})

console.log('...ANTES')

eventEmitter.emit('start')

console.log('DEPOIS.')