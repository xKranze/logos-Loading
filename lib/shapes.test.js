const Shapes = require('./shapes.js');

//testing suite for Shapes is created.
describe('Shapes', () => {
    //test is created to check that the Triangle shape is correctly rendered
    describe('triangle', () => {
        it('should display a rendered triangle in svg', () => {
            const shape = new Shapes.Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150,20 280,180 20,180" fill="blue"/>');
        });
    });
});

//testing suite for Shapes is created.
describe('Shapes', () => {
    //test is created to check that the Triangle shape is correctly rendered
    describe('circle', () => {
        it('should display a rendered circle in svg', () => {
            const shape = new Shapes.Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
        });
    });
});

//testing suite for Shapes is created.
describe('Shapes', () => {
    //test is created to check that the Triangle shape is correctly rendered
    describe('square', () => {
        it('should display a rendered square in svg', () => {
            const shape = new Shapes.Square();
            shape.setColor("green");
            expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="green"/>');
        });
    });
});