function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
      if ( typeof obj === "object"&& (typeof keyPath === "string" && keyPath.indexOf('.') != -1)){
          return obj[keyPath];
      }
  }
  
const obj = {
    "user": { "address": { "city": "New York" } }
}

let result = getNestedValue(obj,"user.address.city");

console.log(result);