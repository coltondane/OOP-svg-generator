const Circle = require('../lib/circle.js');
const Triangle = require('../lib/triangle.js');
const Square = require('../lib/square.js');

describe('Circle', () => {
    test('should render a specific shape with the given attributes', () => {
        const shapeColor = 'red';
        const textColor = 'black';
        const text = 'SVJ';
        const shape = 'Circle'
        const expectedSVJ = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="red" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVJ</text></svg>`

        const circle = new Circle(text, textColor, shape, shapeColor);
        expect(circle.render()).toEqual(expectedSVJ);
    })
})

describe('Triangle', () => {
    test('should render a specific shape with the given attributes', () => {
        const shapeColor = 'red';
        const textColor = 'black';
        const text = 'SVJ';
        const shape = 'Triangle'
        const expectedSVJ = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244, 182 56, 182" style="fill:red" /> <text x="150" y="125" font-size="55" text-anchor="middle" fill="black">SVJ</text></svg>`

        const triangle = new Triangle(text, textColor, shape, shapeColor);
        expect(triangle.render()).toEqual(expectedSVJ);
    })
})

describe('Square', () => {
    test('should render a specific shape with the given attributes', () => {
        const shapeColor = 'red';
        const textColor = 'black';
        const text = 'SVJ';
        const shape = 'Circle'
        const expectedSVJ = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red"></rect><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVJ</text></svg>`

        const square = new Square(text, textColor, shape, shapeColor);
        expect(square.render()).toEqual(expectedSVJ);
    })
})