import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import util from './components/util';
import Options from './components/options';
import Deck from './components/deck';

import rootReducer from './rootReducer';
import Cards from './components/cardlist';
import { loadState, saveState } from './util/localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(throttle(() => saveState(store.getState()), 1000));

class App extends React.Component {
  componentDidMount() {
    const options = {
      method: 'GET',
      headers: { 'Content-Type' : 'application/json' },
    };
    if (store.getState().words.length < 2) {
      fetch('http://54.193.115.230/api/spanish/top1000', options)
        .then(response => response.json())
        .then((data) => {
          const words = data;
          store.dispatch({
            type: 'LOAD',
            words,
          });
        }).catch((err) => {
          console.log(`error ${err}`);
        });
    }
  }

  render() {
    return (
      <div >
        <Cards />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
