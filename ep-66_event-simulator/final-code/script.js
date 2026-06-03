const addCardBtn = document.querySelector('.add-card')
const removeCardBtn = document.querySelector('.remove-card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})
removeCardBtn.addEventListener('click', () => {
  const lastCard = container.querySelector('.card:last-child')
  if (lastCard) {
    lastCard.remove()
    count--
  }
})
setTimeout(() => {
    input.focus()
    console.log('Input Focused');
}, 1000)

// setTimeout(() => {
//     input.blur()
//     console.log('Input Blurred');
// }, 3000)

// setTimeout(() => {
//     form.submit()
//     console.log('Form Submitted');
// }, 3000)

form.reset()

// const intervalId = setInterval(() => {
//   if (count > 999) {
//     clearInterval(intervalId)
//   }
//   addCardBtn.click()
// }, 5)
