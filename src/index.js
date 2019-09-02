import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from "react-redux"
import { createStore, compose, applyMiddleware } from "redux"
import AppRoute from "./routes/routes.js"
import { AppReducer } from "./reducers"
import thunk from "redux-thunk"
import { BrowserRouter } from "react-router-dom"

const initialState = {}
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose
/* eslint-enable */
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)

const initStore = (reducers, state) => {
  return createStore(reducers, state, enhancer)
}


const store = initStore(AppReducer, initialState)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
