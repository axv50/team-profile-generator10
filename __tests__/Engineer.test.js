const Engineer = require('../lib/Engineer');
const { expect } = require('@jest/globals');

test('creates an engineer object', () => {
    const engineer = new Engineer ('test employee', 'test id', 'test email');

    expect(engineer.name).toBe('test employee');
    expect(engineer.id).toBe('test id');
    expect(engineer.email).toBe('test email');
});

test('creates engineer object', () => {
    const engineer = new Engineer('test employee','test id','test email');

    expect(engineer.name).toBe('test employee');
    expect(engineer.id).toBe('test id');
    expect(engineer.email).toBe('test email');
});

test('get engineer name', () => {
    const engineer = new Engineer('test employee','test id','test email');

    expect(engineer.getName()).toBe('test employee');
});

test('get engineer id', () => {
    const engineer = new Engineer('test employee','test id','test email');

    expect(engineer.getId()).toBe('test id');
});

test('get engineer email', () => {
    const engineer = new Engineer('test employee','test id','test email');

    expect(engineer.getEmail()).toBe('test email');
});
