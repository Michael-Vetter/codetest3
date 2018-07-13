#!/usr/bin/env node
var exports = module.exports = { main };



main(process.argv.slice(2), logger);




function main(inputArgs, logger) {
	
	if(inputArgs.length != 1) {
		logger('Please pass in one parameter containing Xs, Os, and 1s');
		return;
	}
	
	inputString = inputArgs[0];
	
	if(!validateString(inputString, 'X01')) {
	   logger('Please enter a string that contains only Xs, Os, and/or 1s');
	   return;
	}
	
	printCombo(inputString, logger);
	
}

function printCombo(stringToProcess, logger) {
		
	const X = 'X';
	
	var xLocation = stringToProcess.indexOf(X);
	
	if(xLocation < 0)
		logger(stringToProcess);
	else {
		var zeroVersion = setCharAt(stringToProcess, xLocation, '0');
		var oneVersion = setCharAt(stringToProcess, xLocation, '1');
		printCombo(zeroVersion, logger);
		printCombo(oneVersion, logger);
	}
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function logger(textToLog)
{
	console.log(textToLog);
}


// returns true if str contains only the characters in 'contains'
// returns false if str length is zero or has invalid characters
function validateString(str, contains){

	if (str.length == 0)
		return false;

	validChars = new RegExp('[^' + contains + ']');
	
	if(validChars.test(str))
		return false;
	else
		return true;
}
