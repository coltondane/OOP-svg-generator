const Shape = require('./shape.js');

class Triangle extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        this.shape =  `<svg height="250" width="250"><polygon points="225,10 100, 210 350, 210" style="fill:${this.shapeColor}" /> <text x="150" y="125" text-anchor="middle" fill="${this.textColor}" font-size="100px" font-family="Arial" dy=".3em">${text}</text></svg>`

        return this.shape;
    }
}

module.exports = Triangle;