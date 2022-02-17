const cluster = require('cluster')
const fs = require('fs')
const path = require('path')

if (cluster.isMaster) {
  /* master 进程 */
  const cpuNum = require('os').cpus().length
  for (let i = 0; i < cpuNum; i++) {
    cluster.fork()
  }

  /* 创建进程后log */
  cluster.on('online', (worker) => {
    console.log('Create worker-' + worker.process.pid)
  })

  /* 子进程退出后重启 */
  cluster.on('exit', (worker, code, signal) => {
    console.log(`[Master] worker ${worker.process.pid} did with code and signal: ${signal}`)
    cluster.fork()
  })

  cluster.on('error', (err) => {
    console.log('error', err)
  })
} else {
  /* worker 进程 */
  const net = require('net')
  net.createServer().on('connection', (socket) => {
    // setTimeout(() => {
    //   const data = fs.readFileSync(path.resolve(__dirname, '../fortest/cc.pdf'))
    //   socket.end(`request handled by worker-${process.pid}`)
    // }, 10)
    let t1 = new Date().getTime()
    while (new Date().getTime() - t1 < 100) {
      
    }
    socket.end(`request handled by worker-${process.pid}`)
  }).listen(8090)

}