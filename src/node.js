
  import http from "http";
  import fs from "fs";
  import path from "path";

  const server= http.createServer((req, res)=>{
        if(req.url==="/"){
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.createReadStream(path.resolve("public/index.html")).pipe(res);
            //res.end("hello");
       }else if(req.url=="/style.css"){
        res.writeHead(200, {"Content-Type": "text/css"})
        fs.createReadStream(path.resolve("public/style.css")).pipe(res);
       }
       else if(req.url==="/hello"){
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end("Welcome Armath");
       }else if(req.url==="/bye"){
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({
            name: "poghos"
        }));
       }
       else{
           res.writeHead(404,{"Content-Type": "application/json"});
           res.end("Not found");

       }
    
  });

  server.listen(8080);
  //console.warn(http)*/
  
  
  
  /*const server= http.createServer((req, res)=>{

    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify({
        name: "poghos"
    }));
  });

  server.listen(8080);*/
  
  
  
  
  
  
  
  /*import http from "http";

  const server= http.createServer((req, res)=>{

    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Hello Armath")
  });

  server.listen(8080);*/
  //console.warn(http)