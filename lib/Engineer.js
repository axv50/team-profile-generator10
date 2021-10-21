const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        super(name, id, email);

    }

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github
        }
    }
}

module.exports = Engineer;