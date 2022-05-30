// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateHTML = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [

];


// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), err => {
        if (err) throw new Error(err);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('./dist/index.html', answers);
        console.log("HTML File Generated Successfully !");

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

// Function call to initialize app
init();