import Person from "./person.js"
class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce() {
        let res = super.introduce() + ` I am a Teacher. `;
        let str = "";

        if (typeof(this.klasses) === 'undefined')
            res += `I teach No Class.`;
        else {
            this.klasses.forEach((item, index, inputs) => {
                if (index !== inputs.length - 1)
                    str += ` ${item.number},`;
                else
                    str += ` ${item.number}`;
            });
            res += `I teach Class${str}.`;
        }
        return res;
    }

    Teaching(student) {
        this.klasses.forEach(item => {
            if (item.Teaching(student))
                return true;
        });
        return false;
    }
}

module.exports = Teacher;