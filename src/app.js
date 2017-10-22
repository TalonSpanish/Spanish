import React from "react";
import ReactDOM from "react-dom";
import util from './components/util';
import Options from './components/options';
import Deck from './components/deck';

import rootReducer from './rootReducer';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import Cards from './components/cardlist';
import { loadState, saveState } from './util/localStorage';
import throttle from 'lodash/throttle'

const persistedState = loadState();
const store = createStore(rootReducer, persistedState)

store.subscribe(throttle(() => {
	saveState(store.getState());
}, 1000));

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
		const options = {
			method: 'GET',
			headers: { 'Content-Type' : 'application/json' },
		};
		if (store.getState().words.length < 2) {
			fetch('http://54.193.115.230/api/spanish/top1000', options)
			.then(response => {
				return response.json();
			}).then(data => {
				const words = data;
				store.dispatch({
					type: "LOAD",
					words
				})
			}).catch(err => {
				console.log('error ' + err);
			});
		}
	}

	render() {
		return (
			<div >
				<Cards />
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);















