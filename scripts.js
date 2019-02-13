
$(function() {
	$('#calcButton').click(calc);
});

window.onkeyup = function(e) {
	let key = e.keyCode ? e.keyCode : e.which;
	if(key==13) //enter
		calc();
}

function covariance(x, y) {
	if(x.length!=y.length)
		return null;
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
	let xVals = $('#xInputs').val().split(',');
	let yVals = $('#yInputs').val().split(',');
	for(let i=0; i<xVals.length; i++)
		xVals[i] = parseFloat(xVals[i]);
	for(let i=0; i<yVals.length; i++)
		yVals[i] = parseFloat(yVals[i]);

	let ans = covariance(xVals, yVals);
	$('#output').val(ans);
}