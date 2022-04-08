const fs = require('fs')
const path = require('path')

// console.log('resolve', path.resolve('./aa.ts'))
// const file = fs.readFileSync(path.resolve('./aa.ts')).toString()
// console.log(file, file.name)
const file2 = require(path.resolve(__dirname,'./aa'))
console.log(file2)

// const f3 = fs.createReadStream('./aa.ts')
// let file3 = ''
// f3.on('data', (data) => {
//   console.log(data.toString())
// })