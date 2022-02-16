const childProcess = require('child_process')
const path = require('path')

const worker = childProcess.fork(path.resolve(__dirname, './worker.js'))

worker.send('hello world')
worker.on('message', (msg) => {
  console.log(`[Master] Receiveed messaged from worker: ${msg}`)
})