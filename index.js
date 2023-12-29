// Import necessary modules and files
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project',
    },
    {
      type: 'checkbox',
      name: 'Table of Contents',
      message: 'Select items for table of contents to make it easy for users to find what they need.',
      choices: [ 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
      default: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
    },
    {
      type: 'input', 
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage', 
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
      default: 'MIT',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide guidelines on how others can contribute to your project.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide instructions or details on how to test your project',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username for users with questions'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email username so users can reach out with further questions'
    },
  ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md has been successfully generated!');
        }
      });
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userResponses) => {
      const markdownContent = generateMarkdown(userResponses);
      writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
