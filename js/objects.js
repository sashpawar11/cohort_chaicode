//create obj

const teas = {
    name: "masala-chai",
    type: "Orange",
    caffiene: "Low"
}


// access and print name and type properties

console.log(teas.name);
console.log(teas.type);
console.log(teas["type"]);   // same as 13 ( incase property name is not a single word)


// change caffiene level of obj

teas.caffiene = "High";
console.log(teas);


// Add new property
teas.origin = "India";
console.log(teas);


// Remove type property from obj
delete teas.type;


// check if object has property origin
console.log(Object.hasOwn(teas.origin));
console.log("origin" in teas);


// use for in loop to printall properties of teas objects

for (let k in teas) {
    console.log(k + ": " + teas[k]);
}


// Create nested object represnting different types of teas and their properties

const teasCollection = {
    "MasalaChai": {
        type: "hot-tea",
        location : {
            city: "Goa",
            country : "India"
        }     
    },
    "Green Tea" : {
        type: "hot-tea",
        location : {
            city: "Beijing",
            country : "China"
        }     
    }
}


// create copy of object teaCollection

const copyTeasCollection = {
    ...teasCollection
} // shallow copy   ( copies only the address of the object)

const anotherCopy = teas // reference ( not copy)


// Create a new object from teaCollection
const newTeasObj = Object.new()



// write method to 