import React from "react";

let cardStyle = {
	width: "340px",
	height: "140px",
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	border: "2px solid lightblue",
	borderRadius: "5px",
	margin: "10px",
	alignItems: "center",
	position: "relative",
	textAlign: 'center',
}

let textStyle = {
	margin: "20px",
	fontSize: "35px",
	fontFamily: "sans-serif",
}

let frequencyStyle = {
	position: 'absolute',
	top: '5px',
	right: '5px',
	fontSize: '16px',
	color: 'lightgray',
	fontFamily: "sans-serif",
}

let lanStyle = {
	position: 'absolute',
	top: '5px',
	left: '5px',
	fontSize: '16px',
	color: 'green',
	fontFamily: "sans-serif",
}

let redStyle = {
	position: 'absolute',
	width: '50%',
	height: '100%',
	left: '0',
	backgroundColor: 'rgba(180, 20, 20, 0.1)'
}

let greenStyle = {
	position: 'absolute',
	width: '50%',
	height: '100%',
	right: '0',
	backgroundColor: 'rgba(20, 180, 20, 0.1)'
}

class Flashcard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			side: 'front',
			word: props.word,
			hover: false,
		}
	}

	flipBack() {
		this.setState( {side: 'back'} );
	}

	flipFront() {
		this.setState( {side: 'front'} );
	}

	hoverTrue() { this.setState( {hover: true} ) }
	hoverFalse() { this.setState( {hover: false} ) }

	getNext() {
		let word = this.props.getNext()
		if (!word) return
		this.setState( { word: word, side: 'front' } );
	}

	render() {
		return (
			<div>
				{ this.state.side === 'front' &&
					<div style={cardStyle} 
						onClick={() => this.flipBack()}
						onMouseEnter={() => this.hoverTrue()}
						onMouseLeave={() => this.hoverFalse()}
						onMouseOver={() => this.hoverTrue()}>
						<span style={textStyle} >{this.state.word.spanish} </span>
						<span style={lanStyle}>esp.</span>
					</div>
				}
				{ this.state.side === 'back' &&
					<div style={cardStyle} 
						onMouseEnter={() => this.hoverTrue()}
						onMouseLeave={() => this.hoverFalse()}
						onMouseOver={() => this.hoverTrue()}>
						<span style={frequencyStyle} >{this.state.word.frequency} </span>
						<span style={textStyle} >{this.state.word.english} </span>
						<span style={lanStyle}>eng.</span>
						{this.state.hover && 
							<div style={redStyle} onClick={() => this.flipFront()}>
							</div>
						}
						{this.state.hover && 
							<div style={greenStyle} onClick={() => this.getNext()} >
							</div>
						}
					</div>
				}
			</div>
		)
	}
}


export default Flashcard;




