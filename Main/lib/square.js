const Shape = require('./shape.js');

class Square extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    makeSquare() {
        this.shape = `<svg xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="100" fill="${this.shapeColor}"></rect><text x="0" y="50" font-family="Verdana" font-size="35fill="${this.textColor}">${this.text}</text></svg>`

        return this.shape;
    }
}

module.exports = Square;