const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is resolve data');
    }, 1500);
});

promise.then((data) => {
    console.log(data);
});

promise.then((data) => {
    console.log(data);
});