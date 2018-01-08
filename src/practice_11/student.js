const Person = require('./person.js');
module.exports = class Student extends Person {
    constructor(prosition, name, age, klass) {
        super(prosition, name, age);
        this.klass = klass;
    }
    introduce() {
        let p = super.introduce();
        if (this.hasOwnProperty("klass") && this.klass.leader === this) {
            return p + " I am a Student. I am Leader of " + this.klass.getDisplayName() + ".";
        } else {
            return p + " I am a Student. I am at " + this.klass.getDisplayName() + ".";
        }

    }
}