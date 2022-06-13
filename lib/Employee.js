// function add(n1, n2) {
//     return n1 + n2;
// }

class Employee {

    constructor(Id, name, email) {
        this.Id = Id;
        this.name = name;
        this.email = email;
    }
    getName = () => {
        return this.name;
    }

    getId = () => {
        return this.Id;
    }

    getEmail = () => {
        return this.email;
    }

    getRole = () => {
        return 'Employee';
    }
}



module.exports = Employee