import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'greeting',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Greeting = require('./containers/GreetingContainer').default
      const reducer = require('./modules/greeting').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'greeting', reducer })

      /*  Return getComponent   */
      cb(null, Greeting)

    /* Webpack named bundle   */
    }, 'greeting')
  }
})
