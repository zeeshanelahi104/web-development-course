
// const pi = 3.14159
// let finalResult = null;
// function addTwoNumbers(a, b) {
// // debugger

//     return a + b
// }

// const result = addTwoNumbers(56, 6)
// // const newResult = addTwoNumbers(20, 60)
// // console.log(result);

// var name = 'Anurag'

// const name = 'Anurag'
// let age = 25


// //arrow functions

// const addTwoNumbers = (a, b) => {
//     return a + b
// }
// finalResult = addTwoNumbers(56, 6)
// const addTwoNumbers = (a, b) => a + b
// const newResult = addTwoNumbers(56, 6)

// const introduceMe = () => {
//     console.log('Hi,');
//     console.log(`My name is ${name || 'Procodrr'}.`);
//     console.log(`I am a Software Engineer`);
//     console.log(`I am 24 years old.`); 
// }
// introduceMe()

function introduceMe() {
    console.log('Hi,');
    console.log(`My name is ${name || 'Procodrr'}.`);
    console.log(`I am a Software Engineer`);
    console.log(`I am 24 years old.`); 
}

const introduceMe = (username, profession, age) => {  
    console.log('Hi,');
    console.log(`My name is ${username || 'Procodrr'}.`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old.`); 
}
introduceMe('Zeeshan Elahi', 'Software Engineer', 25);