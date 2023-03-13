function sumOfArrayTotal(arr) {

    let total = 0;
    let sumOfTotal = [];
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        sumOfTotal.push(total);
    }
    return sumOfTotal[sumOfTotal.length - 1];

}

console.log(sumOfArrayTotal([56, 4, 12, 90]));

// 2nd method in sum of array in js

function sumTotal(arr) {
  
    return arr.reduce((sum, curr) => {
      sum += curr;
      return sum;
    }, 0);

  }

  console.log(sumTotal([56, 4, 12, 90]));

  
