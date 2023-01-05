// const greet = (name) => {
//     console.log(`hello, ${name}`);
// }

// greet('panha');
// greet('poun');

// Global object

console.log(global);

global.setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);