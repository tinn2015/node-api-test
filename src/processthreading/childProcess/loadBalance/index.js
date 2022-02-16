const childProcess = require('child_process')
const cpuNum = require('os').cpus().length
const path = require('path')
const net = require('net')

const workers = []

for (let i = 0; i < cpuNum; i++) {
  const worker = childProcess.fork(path.resolve(__dirname, './worker.js'))
  workers.push(worker)
}


// 负载均衡
let curWorker = 0
const server = net.createServer()

server.on('connection', (socket) => {
  workers[curWorker].send('socket', socket)
  curWorker = curWorker + 1 === cpuNum ? 0 : curWorker + 1
})

server.listen(8090, () => {
  console.log('TCP server: 127.0.0.1:8090')
})