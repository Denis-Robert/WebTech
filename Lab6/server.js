const http = require("http") 
   
const server = http.createServer((req, res) => {
    res.statuscode=200;
    res.write("Hello world") 
    res.end(); 
}) 
  
server.listen((3000), () => { 
    console.log("Server is running at port 3000"); 
})
