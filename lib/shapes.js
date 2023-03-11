const circle = `<circle cx="150" cy="100" r="80"`;
const square = `<rect width="100%" height="100%"`;
const triangle = `<triangle`

function generateLogo(data) {
    var shape = '';
    switch (data.shapeChoice) {
        case 'circle':
            shape = circle;
            break;
        case 'triangle':
            shape = triangle;
            break;
        case 'square':
            shape = square;
            break;
        default:
    }
            return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill='white'/>
  ${shape} fill="red" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`
    }
    module.exports = generateLogo;