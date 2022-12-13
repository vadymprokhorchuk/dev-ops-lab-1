const http = require('http');

const port = process.env.PORT || 80

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!')
}

const server = http.createServer(requestListener);

server.listen(port)

server.on('request', (req, res)=>{
    console.log(`Request from ${req.connection.remoteAddress}`)
})

server.on('listening', ()=>{
    console.log(`Listening on port ${port}...`)
})