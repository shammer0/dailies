// const circle = { 
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };
// circle.draw();

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read =  function () {
//         this.value += +prompt();
//     };
// }

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values

// 04April2022 Your task is to write function factorial.

// function factorial(n){
//     if (n === 1) { 
//         return n
//     }
//     return n * factorial(n - 1);
// }

// function factorial(n){
//     if (n === 0) {
//         return 1;
//     }
//     let product = n;
//     for (let i = n - 1; i > 0; i--) {
//         product *= i;
//     }
//     return product;
// }

// console.log(factorial(0));

// function findMultiples(integer, limit) {
//     let multiples = [];
//     for( let i = 1; i <= limit; i++) {
//         if ((i % integer) === 0) {
//             multiples.push(i);
//         }
//     }

//     return multiples;
//   }

//   console.log(findMultiples(5, 25));

//   Given a sequence of numbers, find the largest pair sum in the sequence.

// function largestPairSum (numbers) {
//     numbers.sort( function (a, b) {
//         return +b - +a;
//     })

//     return numbers[0] + numbers[1];
// }

// single pass version

function largestPairSum (numbers) {
    let bigOne = numbers[0];
    let bigTwo = numbers[1];
    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] > bigOne) {
            if (bigOne > bigTwo) {
                bigTwo = bigOne;
            }
            bigOne = numbers[i];
        }
        else if (numbers[i] > bigTwo) { 
            bigTwo = numbers[i];
        }
        else {
            continue;
        }
    }

    return bigOne + bigTwo;
}

console.log(largestPairSum([-100,-29,-24,-19,19]));