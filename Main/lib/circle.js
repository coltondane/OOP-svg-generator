const Shape = require('./shape.js');

class Circle extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> 
        this.shape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`

        return this.shape;
    }
}

module.exports = Circle;