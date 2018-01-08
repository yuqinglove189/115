module.exports = class Class {
    leader;

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    assignLeader(student) {
        if (student.id === 1) {
            student.id = 0;
        }
        if (student.klass.number === this.number) {
            this.leader = student;
        } else {
            console.log("It is not one of us.");
        }
    }
    appendMember(student) {
        student.klass = this;
    }
}