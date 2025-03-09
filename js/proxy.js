// NEGATIVE INDEXING

const arr = [1, 2, 3, 4, 5]


function negativeIndex(arr) {
    return new Proxy(arr, {

        get(target, prop) {
            const index = Number(prop)
            
            if (index < 0) {
                return target[target.length + index];
            }
            return target[index];
        },

        set(target, prop, value) {
            const index = Number(prop);
            if (index < 0) {
                target[target.length + index] = value;
            }
            else {
                target[index] = value;
            }
          return true
        },
    })
};

let newArr = negativeIndex(arr);

console.log(newArr[-2]);
console.log(newArr[-2] = 5);
console.log(newArr[-2]);


