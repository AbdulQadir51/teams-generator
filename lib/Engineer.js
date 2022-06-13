const Employee = require('./Employee');

class Engineer extends Employee {


    constructor(Id, name, email, githubUsername) {
        super(Id, name, email)
        this.githubUsername = githubUsername;
    }


    getGithub = () => {
        return this.githubUsername;
    }

    getRole = () => {
        return 'Engineer';
    }
}
module.exports = Engineer;