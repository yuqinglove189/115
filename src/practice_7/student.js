"use strict";
import Person from "./person.js";
class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        let p = super.introduce();
        return p + " I am a Student. I am at " + this.klass.getDisplayName() + ".";
    }
}
module.exports = Student;