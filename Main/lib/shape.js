// parent class 
class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}
class Circle extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    makeCircle() {
        this.shape = `<svg width="250" height="250"> <circle cx="125" cy="125" r="100" fill="${this.shapeColor}" /> <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="100px" font-family="Arial" dy=".3em">${this.text}</text></svg>`

        return this.shape;
    }
}

class Triangle extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    makeTriangle() {
        this.shape =  `<svg height="250" width="250"><polygon points="225,10 100, 210 350, 210" style="fill:${this.shapeColor}" /> <text x="150" y="125" text-anchor="middle" fill="${this.textColor}" font-size="100px" font-family="Arial" dy=".3em">${text}</text></svg>`

        return this.shape
    }
}

class Square extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    makeSquare() {
        this.shape = `<svg xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="100" fill="${this.shapeColor}"></rect><text x="0" y="50" font-family="Verdana" font-size="35fill="${this.textColor}">${this.text}</text></svg>`

        return this.shape;
    }
}

module.exports = {Circle, Triangle, Square};
