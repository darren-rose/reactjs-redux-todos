import React, { Component } from 'react';

import {Provider} from 'react-redux';

import { createStore } from 'redux';

import rootReducer from '../reducers';

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const store = createStore(rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AddTodo />
          <VisibleTodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
