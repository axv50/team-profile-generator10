const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            school: this.school
        };
    }
}

module.exports = Intern;