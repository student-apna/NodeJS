const fs = require('fs');

fs.readFile('example.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);

})
const content = "Hello World! This is a test file.";

fs.writeFile('content.txt',content,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('File written successfully!');
})