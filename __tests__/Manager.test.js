const Manager = require('../lib/Manager');

test('creates a new manager object', () => {
    const manager = new Manager('', '', '', '');

    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.getRole()).toEqual(manager);
});