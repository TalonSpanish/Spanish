import React from 'react';
import Redux from 'redux';
import actions from '../cards/actions';
import { connect } from 'react-redux';
import Card from "./flashcard";

const { flip, hover, next } = actions;

const mapStateToProps = (state, ownProps) => {
	return {
		words: state.words
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		flip: id => dispatch(flip(id)),
		hover: (id, isHover) => dispatch(hover(id, isHover)),
		next: id => dispatch(next(id))
	}
}

const Cards = ( {words, flip, hover, next}) => (
	<div>
		{words.map( (word, id) => (
			<Card word={word} 
						key={word.id}
						flip={() => flip(id)}
						hover={hover.bind(null, id)}
						next={() => next(id)}/>
		))}
	</div>
)

const CardsDisplay = connect(
	mapStateToProps,
	mapDispatchToProps
)(Cards);

export default CardsDisplay;