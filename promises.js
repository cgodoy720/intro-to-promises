// Promises are asynchronous -- meaning they run outside the normal flow of a JS file and will "resolve" or "reject" when their asynchronous operation is finished


// Function returns a Promise that will resolve/fulfill if the conditional statement is true, otherwise it gets rejected.
const myPromise = () => {
    return new Promise((resolve, reject) => {
        const a = 1 + 2
        setTimeout(() => {
            if(a == 2){
                resolve('Great Success!')
            } else {
                reject('Aw man, failed')
            }
        }, 2000)
    })
}


// If you try to log the output of a promise before it has been resolved or rejected, it will tell you that it is still <pending>
// console.log(myPromise())

// What happens if you simply try to call the myPromise() function and why do you think that is?
// myPromise()

// .then() gets fired when a promise is resolved/fulfilled
// .catch() gets fired when a promise is rejected
// myPromise()
//     .then((response) => { console.log(response) })
//     .catch((err) => { console.log(err) })