const wordsReducer = (state = [ {spanish: "hola", english: "hi" } ] , action) => {
	if (action.type === "LOAD") {
		return action.words.map( (word,id) => (
			Object.assign({}, word, {
				side: true,
				hover: 'false',
				id: id
			})
		));
	} else if (action.type === "FLIP") {
		return state.map(word => 
			(action.id === word.id) ? Object.assign({}, word, {side: !word.side}) : word
		);
	} else if (action.type === "HOVER") {
		return state.slice(0, action.id)
						.concat(Object.assign({}, state[action.id], {hover: action.isHover}))
						.concat(state.slice(action.id + 1))
	} else if (action.type === "NEXT") {
		return state.map(word => 
			(action.id === word.id) ? state[word.id+12] : word
		)
	} else {
		return state;
	}
}

export default wordsReducer;