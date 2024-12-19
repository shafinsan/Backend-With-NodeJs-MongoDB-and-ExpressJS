import http from 'http';

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(201,'good',{"Content-Type":"text/html"})
        res.write("<h1>home</h1>")
        res.end("<a href='/contact'>contanct</a>")
    }
    else if(req.url==='/contact'){
        res.writeHead(202,'good',{"Content-Type":"text/html"})
        res.write("<h1>contact</h1>")
        res.end("<a href='/about'>about</a>")
    }
    else if(req.url==='/about'){
        res.writeHead(203,'bad',{"Content-Type":"text/html"})
        res.write("<h1>about</h1>")
        res.end("<a href='/'>home</a>")
    }
    else{
        res.writeHead(404,'bad',{"Content-Type":"text/html"})
        res.end("<h1>404 Not Found</404>")
    }
})
server.listen(8000,()=>console.log("server up"))