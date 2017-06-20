import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'counter2',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter2 = require('./containers/CounterContainer2').default
      const reducer = require('./modules/counter2').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter2', reducer })

      /*  Return getComponent   */
      cb(null, Counter2)

    /* Webpack named bundle   */
    }, 'counter2')
  }
})
