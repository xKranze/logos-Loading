//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes.js');

//array of questions for user input using inquirer promt method
inquirer.prompt([
    //logo text here up to 3 chars
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'Enter text for your logo here. (up to 3 characters)',
        maxLength: 3
    },
    //text color here, color keyword or hexidecimal number.
    {
        type: 'input',
        name: 'textColor',
        message: 'Choose the color you want the text to be.',
    },
    //choose a shape choices circle,triangle, or square.
    {
        type: 'list',
        name: 'shapeChoice',
        message: 'Choose one of the following shapes.',
        choices: [
            'circle',
            'triangle',
            'square'
        ]
    },
    //color of the shape here.
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
    },
    //takes data and creates new file called logo.svg and calls generateLogo function
]).then((data) => {
    fs.writeFile('logo.svg', Shapes.generateLogo(data), (err) =>
        err ? console.log(err) : console.log('Successfully created your own logo!!')
    );
})