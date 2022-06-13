'use strict';

//With class

class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age= age;
        this.job = job;
    }

    sayName () {
        console.log(this.name)
    }

    sayAge () {
        console.log(this.age)
    }

    sayJob() {
        console.log(this.job);
    }
}

const createPerson = new Person("Lucas", 23, "Developer");

createPerson.sayName();
createPerson.sayAge();
createPerson.sayJob();

// With constants

const App = {
    Name: (name) => name,
    Age: (age) => age,
    Job: (job) => job,
}

console.log(App.Name("Lucas"));
console.log(App.Job("Developer"));
console.log(App.Age(23));
