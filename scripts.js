
$(function() {
	$('#calcButton').click(calc);
	$('#xInputs').val('2.1,2.5,4,3.6');
	$('#yInputs').val('8,12,14,10');
	calc();
	$('#xInputs').select();
});

window.onkeyup = function(e) {
	let key = e.keyCode ? e.keyCode : e.which;
	if(key==13) //enter
		calc();
}

function covariance(x, y) {
	// if(x.length!=y.length)
	// 	return null;
	let meanX = mean(x);
	let meanY = mean(y);

	let covar = 0;
	for(let i=0; i<x.length; i++)
		covar += (x[i]-meanX)*(y[i]-meanY);
	
	return covar/(x.length-1);
}

function mean(arr) {
	let sum = 0;
	for(let i=0; i<arr.length; i++)
		sum += arr[i];
	return sum/arr.length;
}

function calc() {
	let xVals = $('#xInputs').val().split(' ').join(',').split(',');
	let yVals = $('#yInputs').val().split(' ').join(',').split(',');
	for(let i=0; i<xVals.length; i++)
		xVals[i] = parseFloat(xVals[i]);
	for(let i=0; i<yVals.length; i++)
		yVals[i] = parseFloat(yVals[i]);



	xVals = xVals.filter(function(arr) {
		return ! isNaN(arr);
	});
	yVals = yVals.filter(function(arr) {
		return ! isNaN(arr);
	});
	// for(let i=0; i<xVals.length; i++) {
	// 	if(isNaN(xVals[i]) ) {
	// 		xVals.splice(i, 1);
	// 		i++;
	// 	}
	// }
	console.log(xVals);

	if(xVals.length<2 || yVals.length<2)
		$('#output').val('must have at least 2 x and y values');
	else if(xVals.length != yVals.length)
		$('#output').val('must have same number of x and y values');
	else
		$('#output').val(covariance(xVals, yVals) );
}