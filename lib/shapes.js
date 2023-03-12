// Class is an object with variables and functions
// Constructor has a set rule of parameters needed to be fulfilled in order to build a new class
// New Class is to allocate space for the class using its same properties with out modifying/messing up the original original class.
//-----------------------------------------------------------------------------------
//classes for shapes to be extended to be shared other specific shapes
class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
        this.setColor = function (color) {
            this.shapeColor = color;
        }
    }
}

//classes for shape choices circle,triangle, or square.
//circle class that specificaly renders a circle object in svg
class Circle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor)
        this.render = function () {
            return `<circle cx="150" cy="100" r="80" fill="` + this.shapeColor + `"/>`;
        };
    }
}

//triangle class that specificaly renders a triangle object in svg
class Triangle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor)
        this.render = function () {
            return `<polygon points="150,20 280,180 20,180" fill="` + this.shapeColor + `"/>`;
        };
    }
}

//square class that specificaly renders a square object in svg
class Square extends Shapes {
    constructor(shapeColor) {
        super(shapeColor)
        this.render = function () {
            return `<rect x="70" y="20" width="160" height="160" fill="` + this.shapeColor + `"/>`;
        };
    }
}

//a function that generates and returns a whole svg image file 
function generateLogo(data) {

    //handles which object to display either a circle, triangle, or square
    var shape = '';
    switch (data.shapeChoice) {

        //constructs new circle with selected color and renders it into svg
        case 'circle':
            const circle = new Circle(data.shapeColor);
            shape = circle.render();
            break;

        //constructs new triangle with selected color and renders it into svg
        case 'triangle':
            const triangle = new Triangle(data.shapeColor);
            shape = triangle.render();
            break;

        //constructs new square with selected color and renders it into svg
        case 'square':
            const square = new Square(data.shapeColor);
            shape = square.render();
            break;
        default:
    }

    //completes svg file 
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill='grey'/>
    ${shape}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
</svg>`
}

module.exports = {
    Circle,
    Triangle,
    Square,
    generateLogo
};