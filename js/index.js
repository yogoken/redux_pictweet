import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tweetApp from './reducers'
import App from './components/App'

let store = createStore(tweetApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)