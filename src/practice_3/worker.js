const Person = require('./person.js')
module.exports = class Worker extends Person {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    introduce() {
        return "I am a Worker. I have a job."
    }
}