// find the maxmimum number 

const arr=[4,8,2,11,6,7];


function findMaximum(arr) {

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log("Maximum number are:", findMaximum(arr));

// calculate the sum of the elements in the array.

const sumOf = function(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};

console.log("Sumof:", sumOf(arr));

 //count the odd number 

 const countOdd = (arr) => {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
};

console.log("odd numbers in the arr:",countOdd(arr));