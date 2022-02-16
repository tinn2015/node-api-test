process.on('message', (msg) => {
  console.log(`[Worker] Receiveed messaged from master: ${msg}`)
  process.send('hi master')
})