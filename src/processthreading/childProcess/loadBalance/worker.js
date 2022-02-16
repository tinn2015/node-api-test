process.on('message', (msg, socket) => {
  if (msg === 'socket') {
    setTimeout(() => {
      socket.end('request handled by worker-' + process.pid)
    }, 100)
  }
})