const fs = require('fs')
const path = require('path')

const net = require('net')
  net.createServer().on('connection', (socket) => {
    setTimeout(() => {
      // const data = fs.readFileSync(path.resolve(__dirname, './cc.pdf'))
      let t1 = new Date().getTime()
      while (new Date().getTime() - t1 < 100) {
        // 死循环模拟cpu密集
      }
      socket.end(`request handled by worker-${process.pid}`)
    }, 10)
  }).on('error', (err) => {
    console.log('error', err)
  }).listen(8090)