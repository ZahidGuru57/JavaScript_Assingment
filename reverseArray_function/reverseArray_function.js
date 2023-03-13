function reverseArray(arr) {

    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;

}

console.log(reverseArray([9, 89, 32, 1]));


//   2nd Method to Reverse the Array

function reverseArray(arr) {

    return arr.reverse();

}

console.log(reverseArray([9, 89, 32, 1]));
