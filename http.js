const http=require('http');
const path=require('path');
const fs=require('fs');



// basic server

const server=http.createServer(
    (req,res)=>{
        console.log(req.url);
        if (res.url==='/hello'){
        res.write('hello world');
        res.end();
        }
        else{
            res.end("sorry");
        }
});

server.listen(5000,()=>{console.log("server running")});
