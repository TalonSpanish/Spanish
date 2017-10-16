const flip = (id) => {
	return {
		type: "FLIP",
		id
	}
}

const hover = (id, isHover) => {
	return {
		type: "HOVER",
		id, 
		isHover
	}
}

const next = (id) => {
	return {
		type: "NEXT",
		id
	}
}

const actions = {flip, hover, next};
 
export default actions;