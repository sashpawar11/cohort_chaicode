function deepClone(obj) {
    // Remove all properties with null or undefined values
    if (typeof obj ==="object"){

        let copiedObj = {
            ...obj
        };
        return copiedObj;
    }
    
  
}
  
let result = deepClone({
    "name": "Alice", "age": 25, "address": { "city": "New York", "zip": 10001 }
});

console.log(result);