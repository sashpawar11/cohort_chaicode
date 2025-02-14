
// -------- PROTOTYPES--------------
const arr = [1, 2, 3, 4];
// arr.<>
// Array .map
// Array .forEach ..............
// -- Inherited from : Array.__proto___ 

const str = "Saish";
// str.<>
// String.includes 
//........
// -- Inherited from : String.__proto__


// ----------- POLYFILLS --------

// eg - incase a browser does not support certain methods, we can define our own methods ( polyfills) as a safety fallback
if (!Array.prototype.fill) {
    Array.prototype.fill = function () {
            // polyfills.js
    }
}
