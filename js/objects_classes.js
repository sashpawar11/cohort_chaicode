// Prototype
// Prototype Chaining
// Objects


const person1 = {

    name: "Saish",
    country: "India",
    planet: "Earth",
    getDetails() {

        return `Details : ${this.name} from ${this.country},${this.planet}`
    }
}

const person2 = {

    name: "Pawar",
    country: "India",
    planet: "Mars",  
}


console.log(person1);
console.log(person1.getDetails());
person2.__proto__ = person1; // _proto___ --> protypal inhertiance between objects. 
person1.__proto__ = null; // Ends at when the last _proto_ chain is null in an object
console.log(person2.getDetails());
console.log(person2.toString());   // should fail ( as the proto chain is broken when it reaches person1, hence cannot access the Object Prototype methods)