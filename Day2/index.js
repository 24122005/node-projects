
const http = require("http")
const port = 8080

const handleRequest = (req, res)=>{
    res.write("<h1>Name: Pranav Rupareliya</h1>")
    res.write("<h2>Email: rupareliyapranav75@gmail.com</h2>")
    res.write("<h3>Age : 20</h3>")
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