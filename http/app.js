const http = require('http');
const server  = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end("Hello world!");
})  


server.listen(3000,()=>{
    console.log(`Server is running ar port :${3000}`);
})