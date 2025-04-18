const path = require('path');
const os = require('os');
// const url = require('url');
 const crypto = require('crypto');
 const lodash  = require('lodash');

// const directory = "http://localhost:3000/";
// const fileName = "example.txt";
// const fullPath = path.join(directory,fileName);
// console.log(fullPath);



// console.log('Platform:',os.platform());
// console.log("CPU Architecture:",os.arch());
// console.log("Total Memory:",os.totalmem());
// console.log('Free Menory:',os.freemem());

// console.log('Platform:', os.platform());
// console.log('CPU Architecture:', os.arch());
// console.log('Total Memory:', (os.totalmem() / (1024 * 1024)).toFixed(2), 'MB');
// console.log('Free Memory:', (os.freemem() / (1024 * 1024)).toFixed(2), 'MB');



const myURL = new URL('https://example.com:8000/path/name?query=string#hash');
console.log('Hostname:',myURL.hostname);
console.log('Pathname:',myURL.pathname);
console.log('Port:',myURL.port);
console.log('Search Params',myURL.searchParams.get('query'));

// const hash = crypto.createHash('sha256');
// const data = 'Hello World!';
// hash.update(data);
// const digest = hash.digest('hex');
// console.log('Hash:',digest);



// single module export
const sayHello = require('./greetings');


const message = sayHello('Aftab Alam!!');
console.log(message);


// multiple module export

// const math = require('./math');

// const add = math.add(5,10);
// const sub = math.sub(10,5);
// const mul = math.mul(10,10);

// console.log('Addition:',add);
// console.log('Subtraction:',sub);
// console.log('Multiplication:',mul);


// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers  = lodash.filter(numbers,(num)=>{
//     return num %2 ===0;
// })

// console.log("Even Numbers:",evenNumbers);

// const reversedArray = lodash.reverse(numbers);
// console.log("Reversed Array:",reversedArray);


// const uniqueArray = lodash.uniq([1,2,3,4,5,1,2,3,4,5]);
// console.log("Unique Array:",uniqueArray);

// const sortedArray = lodash.sortBy(numbers);
// console.log("Sorted Array:",sortedArray);



const EventEmitter = require('events');

const emiiter = new EventEmitter();

// Registering a event listener
emiiter.on('test1', () => {
    console.log(' An Event  has Triggered!');
} );

emiiter.on('error', (err) => {  
    console.error('An error occurred:', err.message);
});

try{
    emiiter.emit('test1');
    emiiter.removeListener('test1');
    emiiter.emit('test1');
}catch(err){
    emiiter.emit('error', err);
}













