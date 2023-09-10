// import libraries
const inquirer = require('inquirer');
const{ log } = require('console');
const Circle = require('./lib/shapes.js');
const Square = require('./lib/shapes.js');
const Triangle = require('./lib/shapes.js');

// prompt the user
function prompts() {
    return inquirer
        .prompt([
             {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for your logo',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the color for your text (Hexidecimal accepted)',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose what shape you would like your logo to use', 
                choices: ['Triangle', 'Circle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the color for your shape (Hexidecimal accepted)',
            }
        ])
        // Create the logo
        .then((answers) => {
            log(answers);
        })
    }

prompts();