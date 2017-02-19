import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import cells from './reducers'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(
    combineReducers({
      cells,
      routing: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import About from './modules/About'
import Main from './modules/Main'
import Sweeper from './modules/Sweeper'

const history = syncHistoryWithStore(browserHistory, store)

render(<Provider store={store}>
          <Router  history={history}>
            <Route path="/" component={Main}>
              <IndexRoute component={Sweeper}/>
              <Route path="about" component={About}/>
            </Route>
          </Router>
        </Provider>
, document.querySelector("#app"));
//<Match exactly pattern="/" component={Main}/>
//<Match exactly pattern="/about" component={About}/>