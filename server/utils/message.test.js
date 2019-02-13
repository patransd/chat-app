var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Elli';
		var text = 'Some message';
		var message = generateMessage(from, text);

		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({from, text});
		// store res in var
		// assert from match
		// assert text match
		// assert createdAt is number
	});
});