class Koa {
  constructor () {
    this.middleware = []
    this.context = {
      name: 'koa'
    }
  }
  use (middleware) {
    this.middleware.push(middleware)
    console.log('middlewear', this.middleware)
    return this
  }
  compose () {
    const middleware = this.middleware
    const context = this.context
    return dispatch(0)
    function dispatch (i) {
      const fn = middleware[i]
      if (!fn) return Promise.resolve()
      return Promise.resolve(fn(context, dispatch.bind(null, i+1)))
    }
  }
}

/* example */
const koa = new Koa()

koa.use(async (context, next) => {
  console.log('middlewear1', context)
  context.middleware1 = true
  await next()
  console.log('middleweear1 next后面')
})

koa.use(async (context, next) => {
  console.log('middlewear2', context)
  context.middleware2 = true
  await next()
  console.log('middleweear2 next后面')
})

koa.compose()