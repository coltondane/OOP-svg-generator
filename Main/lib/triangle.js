const Shape = require('./shape.js');

class Triangle extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        this.shape =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244, 182 56, 182" style="fill:${this.shapeColor}" /> <text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`

        return this.shape;
    }
}

module.exports = Triangle;