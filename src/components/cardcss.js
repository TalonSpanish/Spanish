const cardStyle = {
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



const CardCss = { cardStyle, textStyle, frequencyStyle, lanStyle, redStyle, greenStyle };

export default CardCss;


