// web server basic

const http = require("http");



const server = http.createServer(function(req,res){

res.setHeader("content-type" , "JSON/Application" );
res.setHeader("access-control-allow-origin" , "*");
res.writeHead(200); // status code http 200 / ok


let dataObj ={id:123456789 , name:"Affan Butt" , email:"buttaffan193@gmail.com"};
let data = JSON.stringify(dataObj);
res.end(data);

});

server.listen(1234 , function(){
    console.log("listening on port 1234");

});


