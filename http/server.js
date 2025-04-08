

const http = require('http');
const { functions } = require('lodash');
const url = require('url');


// handling GET and POST requests

// const server = http.createServer((req,res)=>{
//     if(req.method==='GET' && req.url==='/'){
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.end('Welcome to the home page Aftab')
//     }else {
//         res.writeHead(404,{'content-type':'text/plain'});
//         res.end('Page not found');
//     }

// })
// const server =  http.createServer((req,res)=>{
//     if(req.method==='POST' && req.url==='/submit'){
//         let body ='';
//         req.on('data',(chunk)=>{
//             body+=chunk.toString();
//         })
//         req.on('end',()=>{
//             res.writeHead(200,{'content-type':'application/json'});
//             res.end(JSON.stringify({
//                 message:'Data received',
//                 data:body
//             }))
//         })
//     }else{
//         res.writeHead(404,{'content-type':'text/plain'});
//         res.end('Page not found');
//     }
// })



// Route Handeler

// const routes = {
//     '/':(req,res)=>{
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.end('Welcome to the home page Aftab');
//     },
//     '/about':(req,res)=>{
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.end('Welcome to the about page Aftab');
//     },
//     '/not found':(req,res)=>{
//         res.writeHead(404,{'content-type':'text/plain'});
//         res.end('Page not found');
//     }
// }

// const server = http.createServer((req,res)=>{
//     const {url} = req;
//     if(routes[url]){
//         routes[url](req,res);
//     }else{
//         routes['/not found'](req,res);
//     }
// });



// handling dynamic routes

// const server = http.createServer(  
//     (req,res)=>{
//     const {pathname} = url.parse(req.url);
//     // /user/1234
//     if(pathname.startsWith('/user/')){
//         const userId = pathname.split('/')[2];
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.end(`User ID is ${userId}`);
//     }else{
//         res.writeHead(404,{'content-type':'text/plain'});
//         res.end('Page not found');
//     }
//    })


// Middleware Function for logging requests

// function logRequest(req,res,next){
//     console.log(`${req.method} request made to ${req.url}`);
//     next(req,res);
// }

// const server = http.createServer((req,res)=>{
//     logRequest(req,res,
//         (req,res)=>{
//             const {pathname} = url.parse(req.url);
//             // /user/1234
//             if(pathname.startsWith('/user/')){
//                 const userId = pathname.split('/')[2];
//                 res.writeHead(200,{'content-type':'text/plain'});
//                 res.end(`User ID is ${userId}`);
//             }else{
//                 res.writeHead(404,{'content-type':'text/plain'});
//                 res.end('Page not found');
//             }
//         }

//     )
// });








// Handling Query Parameters
// const server = http.createServer((req,res)=>{
//     if(req.method==='GET' && req.url.startsWith('/search')){
//         const queryObj = url.parse(req.url,true).query ;
//         res.writeHead(200,{'content-type':'application/json'});
//         res.end(JSON.stringify({
//             message:'Query Parameters Received',
//             query:queryObj
//         }))
//     }else{
//         res.writeHead(404,{'content-type':'text/plain'});
//         res.end('Page not found')
//     }

// })


// handling url encodeded data

const querystring = require('querystring');

const server = http.createServer((req,res)=>{
    if(req.method==='POST' && req.url==='/submit'){
        let body ='';
        req.on('data',(chunk)=>{
            body+=chunk.toString();
        })
        req.on('end',()=>{
            const parsedData = querystring.parse(body);
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify({
                message:' Form Data received',
                data:parsedData
            }))
        })
    }else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end('Page not found');
    }
});


server.listen(5001,()=>{
    console.log(`Server is running ar port :${5001}`);
})


