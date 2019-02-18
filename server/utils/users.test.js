const expect = require('expect');
const {Users} = require('./Users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Elli',
			room: 'Japan Fans'
		}, {
			id: '2',
			name: 'Ellip',
			room: 'Tokyo Fans'
		}, {
			id: '3',
			name: 'Phillip',
			room: 'Japan Fans'
		}]
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Elli',
			room: 'Japan Fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var userId = '2';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', () => {
		var userId = '99';
		var user = users.removeUser(userId);

		expect(user).toBeFalsy();
		expect(users.users.length).toBe(3);
	});

	it('should find a user', () => {
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find a user', () => {
		var userId = '4';
		var user = users.getUser(userId);

		expect(user).toBeFalsy();
	});


	it('should return names of Japan Fans', () => {
		var userList = users.getUserList('Japan Fans');

		expect(userList).toEqual(['Elli', 'Phillip']);
	});

		it('should return names of Tokyo Fans', () => {
		var userList = users.getUserList('Tokyo Fans');

		expect(userList).toEqual(['Ellip']);
	});


});