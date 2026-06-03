console.log('Hi-1');

function hello() {
    console.log('Hello World!');
}

for(let i = 1; i <=4; i++){
    console.log(i);
}

hello()
setTimeout(hello, 0) // This will be executed after the current call stack is empty, even though the delay is set to 0 milliseconds. This is because setTimeout is an asynchronous function and it will be placed in the callback queue until the call stack is clear.

console.log('Hi-2');