const cluster = require('cluster')

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
} else {
  /* worker 进程 */
  const net = require('net')
  net.createServer().on('connection', (socket) => {
    setTimeout(() => {
      socket.end(`request handled by worker-${process.pid}`)
    }, 100)
  }).listen(8090)

}