// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
{name: 'user', type: 'input', message: 'What is your GitHub username?'},
{name: 'email', type: 'input', message: 'What is your email address?'},
{name: 'title', type: 'input', message: `What is your project's name?`},
{name: 'description', type: 'input', message: 'Please write a short description of your project:'},
{name: 'license', type: 'list', message: 'What kind of license should your project have?', choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'None']},
{name: 'dependencies', type: 'input', message: 'What command should be run to install dependencies?'},
{name: 'installation', type: 'input', message: 'What should known for the installation process?'},
{name: 'tests', type: 'input', message: 'What command should be run to run tests?'},
{name: 'repoUse', type: 'input', message: 'What does the user need to know about using the repo?'},
{name: 'repoCont', type: 'input', message: 'What does the user need to know about contributing to the repo?'},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            console.error(error);
        } else {
            console.log('File created successfully!')
        }
    })
};


// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions)
    .then((answer) => {
        writeToFile('README.md', generateMarkdown(answer))
    }) ;

};

// Function call to initialize app
init();
