
const http = require("http")
const port = 8080

const handleRequest = (req, res)=>{
    res.write("<h1>Hello, Node!!</h1>")
    res.end()
}

const server = http.createServer(handleRequest)

server.listen(port, (err) => {
    if(err){
        console.log("Server is not responding")
    } else{
        console.log("Server is responding at:" +port) 
    }
})