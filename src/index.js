import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import "./styles/theme.sass"
import "./App.sass"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const initialState = {
  cart: [],
  products: [],
  showCart: false,
  query: ''
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
