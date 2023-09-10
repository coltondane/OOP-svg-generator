// import libraries
const inquirer = require('inquirer');
const{ log } = require('console');


// create the Shape class with its constructors
class Logo {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = 'h';
        this.shapeColor = '';
    }
    // prompt the user
    prompts() {
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
                log(this.shape);
            })
    }
}

// export file
module.exports = Logo;