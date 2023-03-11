//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

//array of questions for user input
const question = [
    //logo text here up to 3 chars
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for your logo here. (up to 3 characters)',
    },
    //text color here
    {
        type: 'input',
        name: 'text-color',
        message: 'Choose the color you want the text to be.',
    },
    //choose a shape choices circle,triangle, or square.
    {
        type: 'input',
        name: 'shape-choice',
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
        name: 'shape-color',
        message: 'What color would you like your shape to be?',
    },
];

