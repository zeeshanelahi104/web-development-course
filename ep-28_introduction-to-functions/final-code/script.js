
// Function Definition
function introduceMe(username, profession, age) {
    // console.log(typeof username);
    // console.log(typeof profession);
    // console.log(typeof age);
    console.log('Hi,');
    console.log(`My name is ${username || 'Procodrr'}.`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old.`); 
}

// //                  Function Call
// const returnValue = introduceMe()

// introduceMe('Anurag', 'Software Engineer', 25)
// introduceMe('Akash', 'Mechanical Engineer', 27)


let functionResult = null;

let a = 10;
let b = 20;

let sum = a + b;
let sum2 = b - a;


function addTwoNumbers(num1, num2) {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    return sum;
}
functionResult = addTwoNumbers(a, b)// addTwoNumbers(a, b);
addTwoNumbers(sum, sum2);
// template literals ``