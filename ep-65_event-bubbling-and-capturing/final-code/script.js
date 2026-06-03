const green = document.querySelector('.green')
// const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')
const pink = document.getElementById('pink') // We can also select the element by its id using getElementById method. This method is faster than querySelector method because it directly accesses the element by its id, whereas querySelector method has to traverse the entire DOM tree to find the element. Therefore, it is recommended to use getElementById method when we want to select an element by its id.

window.addEventListener('click', (e) => {
    console.log('6. Window Event Listener');
}, {capture: false}) //true for capturing phase, false for bubbling phase. By default, it is set to false (bubbling phase). If we set it to true, then the event will be captured in the capturing phase and will not bubble up to the parent elements. If we set it to false, then the event will bubble up to the parent elements and will be captured in the bubbling phase.

document.addEventListener('click', (e) => {
    console.log('5. Document Event Listener');
}, {capture: false})

document.body.addEventListener('click', (e) => {
    console.log('4. Body Event Listener');
}, {capture: false})

green.addEventListener('click', (e) => {
    console.log('3. Green Event Listener');
}, {capture: true})

pink.addEventListener('click', (e) => {
    console.log('2. Pink Event Listener');
}, {capture: false})

blue.addEventListener('click', (e) => {
    console.log('1. Blue Event Listener');
}, {capture: false})

// blue.addEventListener('click', (e) => {
//     console.log('1. Blue Event Listener');
// }, {once: true}) // This will ensure that the event listener is executed only once. After the first click, the event listener will be removed and will not be executed again on subsequent clicks. This is useful when we want to perform an action only once, such as showing a popup or alert message.




