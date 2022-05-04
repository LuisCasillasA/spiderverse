const Spiderman = require('./../app/spiderman.js')

describe("Unit Test for Spiderman class", () => {
    test('1 Create an spiderman object', () => {

        //I want to instace an espiderman object with this information
        const andrewGarfield = new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 2, 'Sony')
        expect(andrewGarfield.name).toBe('Spiderman Sony');
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe('Andrew Garfield');
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe('Sony');
    });
})