//(LIENNA) I'm not sure how to handle NodeJS/Express stuff that well like at all
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html");
})

//I'm not sure what this is... it's from NodeJS_Part3_Express.pptx for Static File Opt3 - oneline approach
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log("Server listening on " + port)
})

var http = require('http')

http.createServer(function (req, res)
{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello World!');
})
.listen(8080);