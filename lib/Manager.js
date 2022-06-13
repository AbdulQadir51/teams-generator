const Employee = require('./Employee');


class Manager extends Employee {

    constructor(Id, name, email, officeNumber) {
        super(Id, name, email);
        this.officeNumber = officeNumber;
    }

    getRole = () => {
        return 'Manager';
    }

    getOfficeNumber = () => {
        return this.officeNumber;
    }
}


module.exports = Manager;