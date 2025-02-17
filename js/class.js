class Person {
    constructor(name,country,planet) {
        this.name = name;
        this.country = country;
        this.planet = planet;
    }

    getDetails() {
        return `Details : ${this.name} from ${this.country},${this.planet}`
    }
    
    getPlanet() {
        return `Planet : ${this.planet}`
    }
}



const person1 = new Person("Saish", "India", "Earth");
const person2 = new Person("Pawar", "India", "Mars");
person2.getDetails = () => {
    return `Override!`;
}


console.log(person1.getDetails());
console.log(person2.getDetails());
console.log(person2.getPlanet());



class A {
    printA() {
        console.log('A');
    }
}

class B extends A {
    printB() {
        console.log('B');
    }
}


const newObjA = new A();
const newObjB = new B();
console.log(newObjB.printA());
console.log(newObjB.printB());
