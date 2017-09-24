function chunk(arr, num) {
	var res = [];
	for (var i = 0; i < arr.length; i+=num) {
		res.push(arr.slice(i, i+num));
	}
	return res;
}

var util = {
	chunk
}

export default util;