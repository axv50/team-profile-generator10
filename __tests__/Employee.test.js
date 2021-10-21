const Employee = require('../lib/Employee');

test('creates a new Employee object', () => {
    const employee = new Employee('test employee', 'test id', 'test email');

    expect(employee.id).toEqual('test id');
    expect(employee.email).toEqual('test email');
    expect(employee.name).toEqual('test employee')
});

test('gets employee name', () => {
    const employee = new Employee('test employee', 'test id', 'test email');
    expect(employee.getName()).toEqual(employee.name);
});

test('gets employee id', () => {
    const employee = new Employee('test employee', 'test id', 'test email');
    expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
    const employee = new Employee('test employee', 'test id', 'test email');
    expect(employee.getEmail()).toEqual(employee.email);
});

test('get employee role', () => {
    const employee = new Employee('test employee', 'test id', 'test email');
    expect(employee.getRole()).toEqual(employee);
});
