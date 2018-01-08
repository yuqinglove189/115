const Person = require('./person.js')
module.exports = class Worker extends Person {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `${super.basic_introduce()} I am a Worker. I have a job.`;
    }

}