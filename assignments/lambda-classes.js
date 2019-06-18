// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student,subject) {
        console.log(`${student.name}
        recieves a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = 
        props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    
    listSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(`${this.name} <3's ${this.favSubjects[i]}`);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} begins working hard on ${subject}`);
    }
}

class ProjectManager extends Instructor { 
    constructor(props) {
        super(props);
this.gradClassName = props.gradClassName;
this.favInstructor = props.favInstructor;
}

standup(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
}
}

debugsCode(student, subject) {
    console.log(`${this.name} debugs ${studen.name}'s code on ${subject}`);
}
}

consgt fred = 