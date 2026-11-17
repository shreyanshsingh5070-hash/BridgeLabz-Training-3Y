Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError("myMap cannot be called on null or undefined.");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Callback must be a function.");
    }

    const sourceArray = Object(this);
    const result = [];

    for (let index = 0; index < sourceArray.length; index++) {
        if (index in sourceArray) {
            result[index] = callback.call(
                thisArg,
                sourceArray[index],
                index,
                sourceArray
            );
        }
    }

    return result;
};

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(number => number * 2);
const squaredNumbers = numbers.myMap(number => number * number);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);
