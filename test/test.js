var assert = require('assert');

var printCombinations = require('../printCombinations');

var loggerText = '';

describe('main()', function() {
	it('should print error if no parameters passed in', function() {
		loggerText = '';
		printCombinations.main([],logger);
		assert.equal(loggerText, 'Please pass in one parameter containing Xs, Os, and 1s');
	});
});
describe('main()', function() {
	it('should print error if parameter contains anything other than X, O, or 1 is passed in', function() {
		loggerText = '';
		printCombinations.main([''],logger);
		assert.equal(loggerText, 'Please enter a string that contains only Xs, Os, and/or 1s');
	});
});
describe('main()', function() {
	it('should print error if parameter contains anything other than X, O, or 1 is passed in', function() {
		loggerText = '';
		printCombinations.main(['2'],logger);
		assert.equal(loggerText, 'Please enter a string that contains only Xs, Os, and/or 1s');
	});
});

describe('main()', function() {
	it('should print all combinations if X passed in', function() {
		loggerText = '';
		printCombinations.main(['X'],logger);
		assert.equal(loggerText, '01');
	});
});
describe('main()', function() {
	it('should print all combinations if XXX passed in', function() {
		loggerText = '';
		printCombinations.main(['XXX'],logger);
		assert.equal(loggerText, '000001010011100101110111');
	});
});
describe('main()', function() {
	it('should print four combinations if 10X10X passed in', function() {
		loggerText = '';
		printCombinations.main(['10X10X'],logger);
		assert.equal(loggerText, '100100100101101100101101');
	});
});


// puts all output in single string without linefeed
function logger(textToLog)
{
	loggerText = loggerText + textToLog;
}
