const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create a new intern object', () => {
    const intern = new Intern('', '', '', '')

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(intern.school);
    expect(intern.getRole()).toEqual(intern);
})