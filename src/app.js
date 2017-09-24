import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/flashcard";
import list from "./assets/top1000"
import util from './components/util'
import Options from './components/options'
import Deck from './components/deck'

class App extends React.Component {

	constructor() {
		super();

		var deck = new Deck();
		deck.init(list);

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
		this.startingList(0, 100);
	}

	startingList() {
		let list = [];
		let { startAt, deck, size, wordsPerRow, rowsPerPage } = this.state;
		deck = deck.select(startAt, startAt+size).shuffle();
		let count = wordsPerRow * rowsPerPage;
		while(list.length < count) {
			list.push(deck.next());
		}
		this.setState( { words: list, deck: deck}, this.render());
	}

	getNext() {
		return this.state.deck.next();
	}

	setStart(num) {
		this.setState( {startAt: num}, () => this.startingList())
	}

	setWordsPerRow(num) {
		this.setState( { wordsPerRow: num }, () => this.startingList() );
	}

	setRowsPerPage(num) {
		this.setState( { rowsPerPage: num }, () => this.startingList() );
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