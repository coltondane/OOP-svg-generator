const Shape = require('./shape.js');

class Circle extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    makeCircle() {
        this.shape = `<circle cx="125" cy="125" r="100" fill="${this.shapeColor}" /> <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="100px" font-family="Arial" dy=".3em">${this.text}</text>`

        return this.shape;
    }
}

module.exports = Circle;