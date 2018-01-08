"use strict";
import Person from "./person.js";
class Teacher extends Person {
    constructor(name, age, klass = null) {
        super(name, age);
        if (klass !== null) {
            this.klass = klass;
        } else {
            this.klass = null;
        }
    }
    introduce() {
        let p = super.introduce();
        if (this.klass !== null) {
            return p + " I am a Teacher. I teach " + this.klass.getDisplayName() + ".";
        } else {
            return p + " I am a Teacher. I teach No Class.";
        }
    }
    introduceWith(student) {
        let p = super.introduce();
        let classOne = student.klass.number;
        let classTwo = this.klass.number;
        if (classOne === classTwo) {
            return p + " I am a Teacher. I teach " + student.name + ".";
        } else {
            return p + " I am a Teacher. I don't teach " + student.name + ".";
        }
    }
}

module.exports = Teacher;