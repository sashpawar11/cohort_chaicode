function cleanObject(obj) {
    // Remove all properties with null or undefined values
    if (typeof obj ==="object"){
          for(const property in obj){
              console.log(`${property}`);
              if(obj[property] === null | obj[property] === undefined ){
                delete obj[property];
                console.log("deleted property")
              }
          }
          
    }
    return obj;
  
}
  
let result = cleanObject({ "name": "Alice", "age": null });

console.log(result);