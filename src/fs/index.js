const fs = require('fs')
const path = require('path')
module.exports = function () {
  fs.access('./testDir', (err, file) => {
    if (err && err.code === 'ENOENT') {
      console.error('文件不存在')
    }
  })
  const testDir = path.resolve(__dirname, './test')
  fs.access(testDir, (err, file) => {
    if (err && err.code === 'ENOENT') {
      console.error(err, '文件不存在')
    } else {
      console.log('文件存在')
    }
  })

  // 在调用 fs.open()、fs.readFile() 或 fs.writeFile() 之前，不要使用 fs.access() 检查文件的可访问性。 这样做会引入竞争条件，因为其他进程可能会在两次调用之间更改文件的状态。 
  // 而是，用户代码应直接打开/读取/写入文件，并处理无法访问文件时引发的错误。

  // 读取文件夹
  let files =fs.readdirSync(testDir)
  console.log(files)

  // 读取文件
  let fileContent = fs.readFileSync(testDir + '/test.js', 'utf8')
  console.log(fileContent)

  // 写入文件
  fs.writeFileSync(path.resolve(__dirname, 'copy/test.js'), fileContent, 'utf8')
}


