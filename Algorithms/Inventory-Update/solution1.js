function updateInventory(arr1, arr2) {
    function getArray(array1, array2, index) {
        return array1.filter(arr => arr[1] === array2[index][1]);
    }

    for(let i=0; i<arr2.length; i++) {
        let subarray = getArray(arr1, arr2, i);
        if(subarray.length === 0) {
            arr1.push(arr2[i]);
        } else if(subarray.length === 1) {
            let matchedArray = getArray(arr1,subarray,0);
            let index = arr1.indexOf(matchedArray[0]);
            arr1[index][0] =  arr1[index][0] + arr2[i][0];
        }
    }
    
    return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);