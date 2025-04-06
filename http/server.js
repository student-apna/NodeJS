const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.method==='GET' && req.url==='/'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('Welcome to the home page Aftab')
    }else {
        res.writeHead(404,{'content-type':'text/plain'});
        res.end('Page not found');
    }

})


server.listen(3000,()=>{
    console.log(`Server is running ar port :${3000}`);
})


