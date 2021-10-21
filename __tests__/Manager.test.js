const Manager = require('../lib/Manager');
const { expect } = require('@jest/globals');

test('creates manager object', () => {
    const manager = new Manager('test employee','test id','test email');

    expect(manager.name).toBe('test employee');
    expect(manager.id).toBe('test id');
    expect(manager.email).toBe('test email');
});

test('get manager name', () => {
    const manager = new Manager('test employee','test id','test email');

    expect(manager.getName()).toBe('test employee');
});

test('get manager id', () => {
    const manager = new Manager('test employee','test id','test email');

    expect(manager.getId()).toBe('test id');
});

test('get manager email', () => {
    const manager = new Manager('test employee','test id','test email');

    expect(manager.getEmail()).toBe('test email');
});