const Shape = require('./shape.js');

class Square extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        this.shape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}"></rect><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`

        return this.shape;
    }
}

module.exports = Square;