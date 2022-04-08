class aa {
  api = 'getConfigJson';

  get fileName() {
    if (this.api === 'getConfigJson') {
      console.log(1)
      return 'config.json'
    }
    console.log(2)
    return '.moro.js'
  }

  read () {

  }

  constructor () {
    this.api = 'getConfigJson'
  }
}

var a = new aa()
a.read()
