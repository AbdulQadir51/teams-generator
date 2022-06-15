// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateHTML = require('./utils/generateMarkup');
var Employee = require('./lib/Employee');
var Manager = require('./lib/Manager');
var Engineer = require('./lib/Engineer');
var Intern = require('./lib/Intern');


// My team object for storing team members
myTeam = [];

// Manager questions
const q_manager = [
    { name: 'name', message: 'Please enter the team manager’s name: ' },
    { name: 'Id', message: 'Please enter the manager’s Id: ' },
    { name: 'email', message: 'Please enter the email address: ' },
    { name: 'officeNumber', message: 'Please enter the office number: ' },
];

// Engineer questions
const q_engineer = [
    { name: 'name', message: 'Please enter the Engineer’s name: ' },
    { name: 'Id', message: 'Please enter the Engineer’s Id: ' },
    { name: 'email', message: 'Please enter the email address: ' },
    { name: 'githubUsername', message: 'Please enter the Github username: ' },
]

// Intern questions
const q_intern = [
    { name: 'name', message: 'Please enter the Intern’s name: ' },
    { name: 'Id', message: 'Please enter the Intern’s Id: ' },
    { name: 'email', message: 'Please enter the email address: ' },
    { name: 'school', message: 'Please enter the school name: ' },
]

// Add new Team members
const q_add_team_members = [{
    name: 'member',
    message: 'Do you you want to add an engineer or an intern or to finish building the team?',
    type: 'list',
    choices: [
        'Engineer', 'Intern', 'Finish building team'
    ],
}]



// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), err => {
        if (err) throw new Error(err);
    });
}

promptNewMembers = () => {
    inquirer.prompt(q_add_team_members).then((answers) => {
        if (answers['member'] == "Finish building team") {
            finishBuilding();

        } else if (answers['member'] == "Engineer") {
            promptEngineer();
        } else {
            promptIntern();
        }


    }).catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.message)
        } else {
            // Something else went wrong
            console.log(error)
        }
    });
}

promptManager = () => {
    inquirer.prompt(q_manager).then((a) => {
        var m = new Manager(a.Id, a.name, a.email, a.officeNumber);
        myTeam.push(m);
        promptNewMembers();

    }).catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.message)
        } else {
            // Something else went wrong
            console.log(error)
        }
    });
}

promptEngineer = () => {
    inquirer.prompt(q_engineer).then((a) => {
        var e = new Engineer(a.Id, a.name, a.email, a.githubUsername);
        myTeam.push(e);
        promptNewMembers();

    }).catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.message)
        } else {
            // Something else went wrong
            console.log(error)
        }
    });
}


promptIntern = () => {
    inquirer.prompt(q_intern).then((a) => {

        var i = new Intern(aa.Id, a.name, a.email, a.school);
        myTeam.push(i);
        promptNewMembers();

    }).catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.message)
        } else {
            // Something else went wrong
            console.log(error)
        }
    });
}

finishBuilding = () => {
    writeToFile('./dist/index.html', myTeam);
    console.log("HTML File Generated Successfully !");
}


// TODO: Create a function to initialize app
function init() {
    promptManager();
}

// Function call to initialize app
init();