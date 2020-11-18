import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import userlistReducer from './reducer/userlist.reducer';
import UserList from './components/UserList';


const store = createStore(
  userlistReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserList/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);