import http from 'http';

const server=http.createServer((req,res)=>{
 
    // res.setHeader("Content-Type","text/html");
    // res.statusCode=200;
    // res.statusMessage="bad";
    // 
    // res.end();
    //short-cut
    res.writeHead(201,'bad',{"Content-Type":"text/html"})
    res.write("<h1>hello world</h1>");
})
server.listen(8000,()=>console.log("server up"))