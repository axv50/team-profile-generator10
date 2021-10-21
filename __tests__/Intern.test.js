const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create a new intern object', () => {
    const intern = new Intern('test employee','test id','test email')

    expect(intern.name).toBe('test employee');
    expect(intern.id).toBe('test id');
    expect(intern.email).toBe('test email');
});

test('get intern name', () => {
    const intern = new Intern('test employee','test id','test email');

    expect(intern.getName()).toBe('test employee');
});

test('get intern id', () => {
    const intern = new Intern('test employee','test id','test email');

    expect(intern.getId()).toBe('test id');
});

test('get intern email', () => {
    const intern = new Intern('test employee','test id','test email');

    expect(intern.getEmail()).toBe('test email');
});
