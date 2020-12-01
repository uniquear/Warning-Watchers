
const http = require('http');
const filesys = require('fs');
const port = 5500;

const requestHandler = function (req, res)
{
    console.log(req.url);

    var filename = "";
    if(req.url.length > 1) //did we get a request to / or something else
    {
        filename = "./" + req.url; //any other request, build the file path
    }
    else
    {
        filename = "./index.html"; //request to / gets index.html
    }

    filesys.readFile(filename, (error, file) => {
        if(error) //null is essentially the same as false
        {
            if(error.code = 'ENOENT')
            {
                //404 error
                res.writeHead(404);
                res.end(error.message);
            }
            console.log("Error Handling:", filename);
            res.writeHead(500, error.message);
            return; //end the read file with an error
        }
        res.end(file); //if no errors, send back the file!
    })
}

const server = http.createServer(requestHandler);

server.listen(port, (error) =>{
    if(error)
    {
        return console.log("Something went wrong!", error);
    }

    console.log("Server is listening on", port);
})