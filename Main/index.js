// import libraries
const inquirer = require('inquirer');
const{ log } = require('console');
const fs = require('fs');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

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
        .then(({text, textColor, shape, shapeColor}) => {
            // create data variable
            let data = '';
            // set the text to upper case
            text = text.toUpperCase();
            // conditonals 
            if (shape === 'Circle') {
                const circle = new Circle(
                    `${text}`,
                    `${textColor}`,
                    `${shape}`,
                    `${shapeColor}`
                )
                // call the makeCircle method
                data = circle.makeCircle();
                log(data);
            }
            else if (shape === 'Triangle') {
                const triangle = new Triangle(
                    `${text}`,
                    `${textColor}`,
                    `${shape}`,
                    `${shapeColor}`
                )
                // call the makeTriangle method
                data = triangle.makeTriangle();
                log(data);
            }
            else {
                const square = new Square(
                    `${text}`,
                    `${textColor}`,
                    `${shape}`,
                    `${shapeColor}`
                )
                // call the makeSquare method
                data = square.makeSquare();
                log(data);
            }
            return data;
        })
        // render the svg file
        .then((data) => {
            fs.writeFile('logo.svg', data, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
        })
    }

prompts();