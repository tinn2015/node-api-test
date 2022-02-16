const {Worker, isMainThread, parentPort, workerData} = require('worker_threads')
console.log('__filename', __filename)
if (isMainThread) {
  const worker = new Worker(__filename, {workerData: {name: 'tinn'}})
  worker.on('message', (msg) => {
    console.log(`[MainThread] receive msg: ${msg}`)
  })
} else {
  const name = workerData.name
  parentPort.postMessage('hello ' + name)
}