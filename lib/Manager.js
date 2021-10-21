const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = '', email = '') {
        super(name, id, email);

    }

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            officeNumber: this.officeNumber
        };
    }
}

module.exports = Manager;