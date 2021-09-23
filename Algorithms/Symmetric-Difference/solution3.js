//Code Explanation

//1. First, we create a Set called compare from the items in our current array. This will create a data structure that holds the unique values from the array we’re comparing against our accumulator Set.
//2. We can iterate over a Set using a for ...of loop, similar to an array. If our accumulator Set has the item, we delete it. If not, we add it.
//3. We do this with each array in the array of arrays, adding and removing values from our accumulator Set until we’ve iterated through all of our arrays, and each of the values inside of them.
//4. The reducer function will return out our accumulated Set. We then just use the spread operator to convert it back into an array.

function sym(...args) {
    return [...args.reduce(reducer, new Set())]
}

function reducer(result, arr) {
    const compare = new Set(arr);
    for (let val of compare) {
        if (result.has(val)) {
            result.delete(val);
        } else {
            result.add(val)
        }
    }
    return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));