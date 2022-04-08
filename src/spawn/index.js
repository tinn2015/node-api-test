const { spawn } = require('child_process');
console.log(process.cwd() + 'files')
const ls = spawn('taro', ['build --type alipay'], {cwd: process.cwd() + '/files', shell: true});

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
