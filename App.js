import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import Start from './screens/Start.js'
import Timer from './screens/Timer.js'
import CreateTimer from './screens/CreateTimer.js'
import reducer from './reducer.js'

const store = createStore(reducer, applyMiddleware(logger))

const App = createStackNavigator({
  Start: { screen: Start },
  Timer: { screen: Timer },
  CreateTimer: { screen: CreateTimer },
}, {
  headerMode: 'none',
})

export default () =>
  <Provider store={store}>
    <App />
  </Provider>
