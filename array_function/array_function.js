function pickLargestArray(arr) {

    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;

}

console.log(pickLargestArray([5, 32, 12, 90]));


// 2nd Method Find the Largest array
function pickLargestElement(arr) {

    return Math.max(...arr);

}

console.log(pickLargestElement([5, 32, 12, 90]));
