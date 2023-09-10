// import libraries
const inquirer = require('inquirer');


// create the Shape class with its constructors
class Logo {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }
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
            // 
    }
}

const logo = new Logo(answers);

// export file
module.exports = Logo;