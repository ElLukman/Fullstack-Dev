// // Callback version
// const requestCallback = (url, succes, failure) =>
// {
//     const delay = Math.floor(Math.random() * 4500) + 1;
//     setTimeout(() => 
//         {
//             if (delay > 4000)
//             {
//                 failure('Error connection Timeout');
//             }
//             else 
//             {
//                 succes(`Success : ${url} (${delay}ms)`)
//             }
//         }, delay);
// }

// Promise version
const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Error connection Timeout');
            }
            else {
                resolve(`Success : ${url} (${delay}ms)`);
            }
        }, delay);
    });
}

async function requestHandler() {
    try {
        let result = await requestPromise('movie.com');
        console.log('Hello');

    } catch (error) {
        console.log('Error', error);
    }
}



// requestPromise('movie.com')
//     .then((response) =>
//     {
//         console.log('page 1');
//         console.log(response);
//         return requestPromise('movie.com');
//     })
//     .then(() =>
//     {
//         console.log('page 2');
//         return requestPromise('movie.com');
//     })
//     .catch((error) => {
//         console.log('error', error);
//     });

// const delayedColorChange = (color, delay) =>
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     })
// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('black', 1000));

// // Async keyword
// const tester = async () => {
//     throw "Maaf gak kenal";
// }

// tester().then((res) => {
//     console.log('response', res);
// }).catch((err) =>
// {
//     console.log('error', err);
// });

// Fungsi Await
// async function changeColor()
// {
//     await delayedColorChange('red', 1000);
//     await delayedColorChange('yellow', 1000);
//     return 'All done';
// }

// async function printRainbow()
// {
//     await changeColor();
//     console.log('All done!');
// }

// printRainbow();