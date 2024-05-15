
const http = require("http")
const fs = require("fs")
const port = 9000

const handleRequest = (req, res)=>{
    // res.write("<h1>Name: Pranav Rupareliya</h1>")
    // res.write("<h2>Email: rupareliyapranav75@gmail.com</h2>")
    // res.write("<h3>Age : 20</h3>")
    // res.end()

    let fileName = ""

    switch(req.url){

        case '/' : fileName="./home.html"
        break
        case '/about' : fileName="./about.html"
        break
        case '/service' : fileName="./service.html"
        break
        case '/contact' : fileName="./contact.html"
        break
    }

    fs.readFile(fileName,(err,result)=>{
        if(!err){
            res.end(result)
        }
    })
}

const server = http.createServer(handleRequest)

server.listen(port, (err) => {
    if(err){
        console.log("Server is not responding")
    } else{
        console.log("Server is responding at:" +port) 
    }
})