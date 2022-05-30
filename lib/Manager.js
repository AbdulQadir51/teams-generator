const Employee = require('./Employee');


class Manager extends Manager {

    officeNumber = '';

    getRole = () => {
        return 'Manager';
    }
}


module.exports = Manager;