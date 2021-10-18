const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer ('', '', '', '');

    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual(engineer);
});