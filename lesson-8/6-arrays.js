const arr = [0, 1, 2, 3];
console.log(arr);

const charsArray = ['a', 'b', 'c', 'd'];
const firstItem = charsArray[0];
console.log(firstItem);



function sum(x, y) {
    return x + y;
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
