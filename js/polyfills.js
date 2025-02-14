// Error in browser log : .forEach func does not exist on arr
if (!Array.prototype.myForEach) {

    Array.prototype.myForEach = function (callback) {    // callblack - basically function provided by user
        const orignalArr = this;
        for (let i = 0; i < orignalArr.length; i++){
            callback(orignalArr[i], i);
        }
        }
}

if (!Array.prototype.myMap) {
    
    Array.prototype.myMap = function (callback) {
        const orignalArr = this;
        const newArr = [];
        for (let i = 0; i < orignalArr.length; i++){
            newArr.push(callback(orignalArr[i]));
        }
        return newArr;
    }
}
// 


const arr = [1, 3, 4, 56, 12];

// -- polyfill forEach
const retMyForEach = arr.myForEach(function (value, index) {
    console.log(`Value at index ${index} is ${value}`);
})
console.log(retMyForEach);

// -----Defalt forEach
const ret = arr.forEach(function (value, index) {
    console.log(`Default for Each: Value at index ${index} is ${value}`);
})

console.log(ret); 
// forEach - return undefined, takes a function(value,idx) and returns after running it on every element in the array




// ----polyfill Map:

let retMap = arr.myMap((x) => x * 2);

console.log("PolyFill Map " + retMap);


// --- default Map:

let retMapDefault = arr.map((x) => x * 2);
console.log("Default Map " + retMapDefault);




