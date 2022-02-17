const { Console } = require('console')
const net = require('net')
const maxConnection = 10000
let connect = 1
console.time('total time')
for (let i = 0; i < maxConnection; i++) {
  const client = net.createConnection({
    port: 8090,
    host: '127.0.0.1',
  })
  client.on('data', (data) => {
    connect += 1
    if (connect === maxConnection) {
      console.timeEnd('total time')
    }
    console.log(data.toString())
    client.destroy()
  })
  client.on('error', (err) => {
    console.log('error', err)
  })
}