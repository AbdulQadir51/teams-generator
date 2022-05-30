const Employee = require('./Employee');

class Engineer extends Employee {


    getGithub = () => {
        return this.githubUsername;
    }

    getRole = () => {
        return 'Engineer';
    }
}
module.exports = Engineer;