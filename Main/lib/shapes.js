class Circle {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    makeCircle() {
        this.shape = '<svg width="250" height="250"> <circle cx="125" cy="125" r="100" fill="#aeaeae" /> <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">BC</text> Sorry, your browser does not support inline SVG. </svg>'
    }
}

class Triangle {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.shape = '<svg height="250" width="250"><polygon points="225,10 100, 210 350, 210" style="fill:lime" /> <text x="150" y="125" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">BC</text> Sorry, your browser does not support inline SVG. </svg>'
    }
    makeTriangle() {
        this.shape = '<svg width="250" height="250"> <circle cx="125" cy="125" r="100" fill="#aeaeae" /> <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">BC</text> Sorry, your browser does not support inline SVG. </svg>'
    }
}

class Square {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.shape = '<svg xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="100" fill="red"></rect><text x="0" y="50" font-family="Verdana" font-size="35fill="blue">Hello</text></svg>'
    }
    makeSquare() {
        this.shape = '<svg width="250" height="250"> <circle cx="125" cy="125" r="100" fill="#aeaeae" /> <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">BC</text> Sorry, your browser does not support inline SVG. </svg>'
    }
}

module.exports = Circle, Square, Triangle;