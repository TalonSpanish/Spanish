import React from "react";
import { connect } from 'react-redux';

import CardCss from './cardcss.js';

let { cardStyle, textStyle, frequencyStyle, lanStyle, redStyle, greenStyle } = CardCss;

class Card extends React.Component {
	
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate(nextProps) {
		return this.props.word !== nextProps.word;
	}

	render() {
		const { word, flip, hover, next } = this.props;
		return (
			<div>
				{ word.side &&
					<div style={cardStyle} 
						onClick={() => flip()}
						onMouseEnter={() => hover(true)}
						onMouseLeave={() => hover(false)}>

						<span style={textStyle} >{word.spanish} </span>
						<span style={lanStyle}>esp.</span>
					</div>
				}
				{ !word.side &&
					<div style={cardStyle}
						onMouseEnter={() => hover(true)}
						onMouseLeave={() => hover(false)}>

						<span style={frequencyStyle} >{word.frequency} </span>
						<span style={textStyle} >{word.english} </span>
						<span style={lanStyle}>eng.</span>
						
						{word.hover && 
							<div style={redStyle} onClick={() => flip()}>
							</div>
						}
						{word.hover && 
							<div style={greenStyle} onClick={() => next()} >
							</div>
						}
					</div>
				}
			</div>
		)
	}
}

export default Card;




