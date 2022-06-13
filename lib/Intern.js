const Employee = require('./Employee');


class Intern extends Employee {

    constructor(Id, name, email, school) {
        super(Id, name, email)
        this.school = school;
    }


    getSchool = () => {
        return this.school;
    }

    getRole = () => {
        return 'Intern';
    }
}



module.exports = Intern;