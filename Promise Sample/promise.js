
function samplePromise() {
    return new Promise((resolve, reject) => {
        if (Math.random() * 100 < 90) {
            console.log('promise will resolve');
            resolve('Hello, Promises!');
        }
        reject(new Error('In 10% of the cases, I fail. Miserably.'));
    });

}

samplePromise()
    .then(message => { document.write(message) })
    .catch(message => { document.write(message) });