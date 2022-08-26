// Synchronous code is what we are used to. It gets read line by line and executes in order.
// console.log('first')
// console.log('second')
// console.log('third')

// for (let index = 0; index <= 10; index++) {
//     console.log(index)
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// Throws error: Cannot access 'newVar' before initialization
// console.log(newVar)
// const newVar = 'ten'

// Asynchronous code operates outside of the normal flow of a JS file in order to not stop the app/program from continuing, while we wait for certain parts of the file to finish executing

console.log('first')

setTimeout(() => {
    console.log('second')
}, 2000)

console.log('third')


for (let index = 0; index <= 1000; index++) {
    console.log(index)
}