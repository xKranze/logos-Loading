//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

//array of questions for user input
const questions = [
    //logo text here up to 3 chars
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for your logo here. (up to 3 characters)',
    },
    //text color here, color keyword or hexidecimal number.
    {
        type: 'input',
        name: 'textcColor',
        message: 'Choose the color you want the text to be.',
    },
    //choose a shape choices circle,triangle, or square.
    {
        type: 'input',
        name: 'shapeChoice',
        message: 'Choose one of the following shapes.',
        choices:[
            'circle',
            'triangle',
            'square',
        ]
    },
    //color of the shape here.
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created your own logo!!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>
        writeToFile('./README.md', generateMarkdown({ ...response }))
    );
}

// Function call to initialize app
init();