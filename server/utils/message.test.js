var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Elli';		
		var longitude = 1;
		var latitude = 1;
		var message = generateLocationMessage(from, longitude, latitude);
		var url = 'https://www.google.com/maps?q=1,1';
		
		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({from, url});
		// store res in var
	});
});