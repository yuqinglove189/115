const Person = require('./person.js');
module.exports = class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }
    introduce() {
        if (this.id === 1) {
            return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        } else return `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
    }
}