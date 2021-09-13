const fsWatch = require('node-watch')
const minimist = require('minimist')
const exec = require('child_process').exec
const chalk = require('chalk')

const argv = minimist(process.argv.slice(2))
console.log(argv)

fsWatch('./src', { recursive: true }, (type, filename) => {
  console.log(chalk.blue('==========================================================================================================================================================='))
  console.log(chalk.green('刷新模块' + argv.t, type, filename))
  console.log(chalk.blue('==========================================================================================================================================================='))
  if (argv.t === 'fs') {
    // doExec('node ./src/fs/index.js')
    delete require.cache[require.resolve('./src/fs')]
    require('./src/fs')()
  } else if (argv.t === 'path') {
    delete require.cache[require.resolve('./src/path')]
    require('./src/path')()
  }
})


function doExec (cmdStr) {
  exec(cmdStr, (err, stdout, stderr) => {
    if (err) {
      console.log('刷新失败', err)
    } else {
      console.log('刷新成功', stdout)
    }
  })
}