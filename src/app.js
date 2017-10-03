import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/flashcard";
import util from './components/util'
import Options from './components/options'
import Deck from './components/deck'

class App extends React.Component {

	constructor() {
		super();

		var deck = new Deck();
		deck.init([]);

		this.state = {
			deck: deck,
			words: [],
			wordsPerRow: 3,
			rowsPerPage: 4,
			startAt: 0,
			showOptions: false,
			size: 100,
		}
	}

	componentDidMount() {
		
		const options = {
			method: 'GET',
			headers: { 'Content-Type' : 'application/json' },
		};

		fetch('http://54.193.115.230/api/spanish/top1000', options)
			.then(response => {
				return response.json();
			}).then(data => {
				const deck = new Deck();
				deck.init(data);
				this.setState({ deck: deck });
				this.startingList(0, 100);
			}).catch(err => {
				console.log('error ' + err);
			});
	}

	startingList() {
		let list = [];
		let { startAt, deck, size, wordsPerRow, rowsPerPage } = this.state;
		deck = deck.select(startAt, startAt+size).shuffle();
		let count = wordsPerRow * rowsPerPage;
		while(list.length < count) {
			list.push(deck.next());
		}
		this.setState( { words: list, deck: deck});
	}

	getNext() {
		return this.state.deck.next();
	}

	setStart(num) {
		this.setState( {startAt: num}, () => this.startingList)
	}

	setWordsPerRow(num) {
		this.setState( { wordsPerRow: num }, () => this.startingList );
	}

	setRowsPerPage(num) {
		this.setState( { rowsPerPage: num }, () => this.startingList );
	}

	showOptions() {
		this.setState( {showOptions: true } );
	}

	hideOptions() {
		this.setState( { showOptions: false} );
	}

	render() {
		return (
			<div >
				{!this.state.showOptions && 
					<div onClick={() => this.showOptions()}>showOptions</div>
				}
				{this.state.showOptions && 
					<div onClick={() => this.hideOptions()}>
						hideOptions
						<Options setStart={this.setStart.bind(this)} 
							setCards={this.setWordsPerRow.bind(this)}
							setRows={this.setRowsPerPage.bind(this)} />
					</div>
				}
				<div style={ {width: this.state.wordsPerRow * 400, 
										display: 'flex',
										flexWrap: 'wrap'} }>
					{this.state.words.map(word =>
						<Card word={word} getNext={this.getNext.bind(this)}/>
					)}
				</div>
			</div>
		)
	}
}



ReactDOM.render(<App name="Jace" />, document.getElementById("app"));