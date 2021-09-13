const chalk = require('chalk')
const path = require('path')
const log = console.log


function init() {
  // 获取路径的最后一个， 第二个参数可以去掉后缀
  log(chalk.bgBlack(''))
  log(chalk.cyanBright('path.basename:'), '获取路径的最后一个， 第二个参数可以去掉后缀')
  console.log(path.basename('/test/something.txt'))
  console.log(path.basename('/test/something.txt', '.txt'))

  // 获取目录部分
  log(chalk.bgBlack(''))
  log(chalk.cyanBright('path.dirname:'), '获取目录部分')
  log(path.dirname('/test/something'))

  log(chalk.bgBlack(''))
  log(chalk.cyanBright('path.extname:'), '获取后缀')
  log(path.extname('/test/something.txt'))

  log(chalk.bgBlack(''))
  log(chalk.cyanBright('path.join:'), '把入参拼成一个url')
  log(path.join('/', 'test', 'something.txt'))

  log(chalk.bgBlack(''))
  log(chalk.cyanBright('path.normalize:'), '尝试计算出一个正确的path')
  log(path.normalize('/test//user/../test.txt'))

  log(chalk.bgBlack(''))
  log(chalk.cyanBright('path.parse:'), '把一个返回成一个对象')
  log(path.parse('/test/user/something.txt'))

  log(chalk.bgBlack(''))
  log(chalk.cyanBright('path.relative:'), '返回一个相对第一个参数的相对路径')
  log(path.relative('/test/user', '/test/user/ben/something.txt'))

  log(chalk.bgBlack(''))
  log(chalk.cyanBright('path.resolve:'), '默认返回相对根目录的地址')
  log(path.resolve('/test'))
  log(chalk.cyanBright('path.resolve:'), '默认返回相对系统根目录的地址')
  log(path.resolve(__dirname))
  log(chalk.cyanBright('path.resolve:'), '第一个参数以/开头，则返回一个绝对地址')
  log(path.resolve('/test', 'something.txt'))
  log(chalk.cyanBright('path.resolve:'), '第一个参数以非/开头，则返回一个相对系统根目录绝对地址')
  log(path.resolve('test', 'something.txt'))
}

module.exports = init