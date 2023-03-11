//classes for shapes to be extended to be shared other specific shapes
class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}
//classes for shape choices circle,triangle, or square.
class Circle extends Shapes {
    constructor(text, textColor, shapeColor)
    super(text, textColor, shapeColor)
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor)
    super(text, textColor, shapeColor)
}


class Square extends Shapes {
    constructor(text, textColor, shapeColor)
    super(text, textColor, shapeColor)
}

