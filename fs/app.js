const fs = require('fs');

// fs.readFile('example.txt','utf8',(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);

// })
// const content = "Hello World! This is a test file.";

// fs.writeFile('content.txt',content,(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('File written successfully!');
// })



// Streams

// const readableStream = fs.createReadStream('example.txt',{encoding:'utf8'});

// readableStream.on('data',(chunk)=>{
//     console.log(chunk);
// });

// readableStream.on('end',()=>{
//     console.log('Finished reading the file.');
// });

// readableStream.on('error',(err)=>{
//     console.error('Error',err);
// });


// const writableStream = fs.createWriteStream('output.txt');

// writableStream.write('Hello World!\n');
// writableStream.write('This is a test file.\n');

// writableStream.end(() => {
//     console.log('Finished writing to the file.');
// });



// Piping Streams

// const readableStream = fs.createReadStream('example.txt',{encoding:'utf8'});
// const writableStream = fs.createWriteStream('example_copy.txt');
// readableStream.pipe(writableStream);

// writableStream.on('finish', () => {
//     console.log('Finished copying the file.');
// });





// perform operation on a large file

const readLine = require('readline');
const readableStream = fs.createReadStream('example.txt',{encoding:'utf8'});
const rl = readLine.createInterface({
    input: readableStream,
})

rl.on('line',(line)=>{
    console.log('Line',line);
});

rl.on('close',()=>{
    console.log('Finished processing the file.');
});





