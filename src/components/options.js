import React from "react";

var optionStyle = {
	display: 'flex',
	flexDirection: 'column',
}

var rowStyle = {
	display: 'flex',
	flexDirection: 'row',
	margin: '5px'
}

var margin = {
	margin: '8px',
	cursor: 'pointer',
	minWidth: '40px',
	fontSize: '16px',
	textAlign: 'center',
	border: '1px solid black',
	borderRadius: '2px',
	padding: '3px',
}

var rowHead = {
	margin: '8px',
	width: '100px',
	fontSize: '16px',
	padding: '3px',
}

var Options = ({setStart, setCards, setRows}) => (
	<div style={optionStyle}>
		
		<div style={rowStyle} >
			<div style={rowHead} >Cards per row: </div>
			<div style={margin} onClick={() => setCards(1)} >1</div>
			<div style={margin} onClick={() => setCards(2)} >2</div>
			<div style={margin} onClick={() => setCards(3)} >3</div>
			<div style={margin} onClick={() => setCards(4)} >4</div>
			<div style={margin} onClick={() => setCards(5)} >5</div>
		</div>

		<div style={rowStyle} >
			<div style={rowHead} >Rows per page: </div>
			<div style={margin} onClick={() => setRows(2)} >2</div>
			<div style={margin} onClick={() => setRows(4)} >4</div>
			<div style={margin} onClick={() => setRows(6)} >6</div>
			<div style={margin} onClick={() => setRows(8)} >8</div>
			<div style={margin} onClick={() => setRows(10)} >10</div>
		</div>

		<div style={rowStyle} >
			<div style={rowHead} >Starting Point: </div>
			<div style={margin} onClick={() => setStart(0)} >000</div>
			<div style={margin} onClick={() => setStart(100)} >100</div>
			<div style={margin} onClick={() => setStart(200)} >200</div>
			<div style={margin} onClick={() => setStart(300)} >300</div>
			<div style={margin} onClick={() => setStart(400)} >400</div>
			<div style={margin} onClick={() => setStart(500)} >500</div>
			<div style={margin} onClick={() => setStart(600)} >600</div>
			<div style={margin} onClick={() => setStart(700)} >700</div>
			<div style={margin} onClick={() => setStart(800)} >800</div>
			<div style={margin} onClick={() => setStart(900)} >900</div>		
		</div>
	</div>
)



export default Options;