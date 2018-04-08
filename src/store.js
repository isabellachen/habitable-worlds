import { createStore, applyMiddleware, compose } from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers'



const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, promise()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
