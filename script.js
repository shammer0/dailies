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

// function largestPairSum (numbers) {
//     let bigOne = numbers[0];
//     let bigTwo = numbers[1];
//     for (let i = 2; i < numbers.length; i++) {
//         if (numbers[i] > bigOne) {
//             if (bigOne > bigTwo) {
//                 bigTwo = bigOne;
//             }
//             bigOne = numbers[i];
//         }
//         else if (numbers[i] > bigTwo) { 
//             bigTwo = numbers[i];
//         }
//         else {
//             continue;
//         }
//     }

//     return bigOne + bigTwo;
// }

// console.log(largestPairSum([-100,-29,-24,-19,19]));

// Given an array of mathematical instructions, find the answer 

// let DIGITS = ['1','2','3','4','5','6','7','8','9','0','-1','-2','-3','-4','-5','-6','-7','-8','-9','-0'];
// let LOW_SYMBOLS = ['+','-'];
// let HIGH_SYMBOLS = ['*','/'];
// const InputEnum = Object.freeze({"digit":1, "lowsymbol":2, "highsymbol":3, "skip":-1});

// function priorityCalc(length, priority, priorityArr, instructions) {
//     let finalValue;
//     let operator;
//     let operatorIndex;
//     let leftOperand;
//     let leftOperandIndex;
//     let rightOperand;
//     let rightOperandIndex;
//     // Find 3s and calculate.
//     for (let i = 0; i < length; i++) {
//         // Scan for a 3
//         // Record index
//         // Add to symbol variable
//         if (priorityArr[i] === priority) {
//             operator = instructions[i];
//             operatorIndex = i;
//         }
//         else {
//             continue;
//         }
//         // Get valid value to the left 
//         // Record index
//         let ii = operatorIndex - 1;
//         while (ii >= 0 ) {
//             if (priorityArr[ii] != InputEnum.digit && priorityArr[ii] != InputEnum.skip) {
//                 return "INVALID INSTRUCTION ORDER";
//             }
//             else if (priorityArr[ii] === InputEnum.skip) {
//                 ii--;
//             }
//             else {
//                 leftOperand = instructions[ii];
//                 leftOperandIndex = ii;
//                 break;
//             }
//         }
//         // Get valid value from the right
//         // Record index
//         ii = operatorIndex + 1;
//         while (ii < priorityArr.length) {
//             if (priorityArr[ii] !== InputEnum.digit && priorityArr[ii] !== InputEnum.skip) {
//                 return "INVALID INSTRUCTION ORDER";
//             }
//             else if (priorityArr[ii] === InputEnum.skip) {
//                 ii++;
//             }
//             else {
//                 rightOperand = instructions[ii];
//                 rightOperandIndex = ii;
//                 break;
//             }
//         }
//         // Calculate final value based on operator
//         switch (operator) {
//             case '*':
//                 finalValue = +leftOperand * +rightOperand;
//                 break;
//             case '/':
//                 finalValue = +leftOperand / +rightOperand;
//                 break;
//             case '+':
//                 finalValue = +leftOperand + +rightOperand;
//                 break;
//         }

//         // Add value to operator index
//         instructions[operatorIndex] = String(finalValue);
//         // modify left, right, symbol priority values
//         priorityArr[operatorIndex] = 1;
//         priorityArr[leftOperandIndex] = -1;
//         priorityArr[rightOperandIndex] = -1;

//         instructions[leftOperandIndex] = InputEnum.skip;
//         instructions[rightOperandIndex] = InputEnum.skip;
//     }
//     // console.log(instructions + '\n' +
//     //             priorityArr)
// }

// function calculate (instructions) {
//     let finalCalc;
//     let priorityArr = [];
//     let length = instructions.length;
//     // Assign instruction priorities
//     for (let i = 0; i < length; i++) {
//         if (DIGITS.includes(instructions[i])) {
//             priorityArr[i] = InputEnum.digit;
//         }
//         else if (LOW_SYMBOLS.includes(instructions[i])) {
//             priorityArr[i] = InputEnum.lowsymbol;
//         }
//         else if (HIGH_SYMBOLS.includes(instructions[i])) {
//             priorityArr[i] = InputEnum.highsymbol;
//         }
//         else {
//             return "INVALID CHARACTERS"
//         }
//     }

//     priorityCalc(length, 3, priorityArr, instructions);
//     priorityCalc(length, 2, priorityArr, instructions);


//     //Find 1 and return.
//     for (let i = 0; i < length; i++) {
//         if (priorityArr[i] === 1) {
//             finalCalc = instructions[i];
//         }
//     }

//     return finalCalc;
// }

// console.log(calculate(['7','*','8','+','8','+','5','/','5']));

