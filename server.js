var http = require('http');
var path = require('path');
var fs = require('fs');

//a helper function to handle HTTP requests
function requestHandler(req, res) {
    var content = '';
    var fileName = path.basename(req.url);//the file that was requested
    var localFolder = __dirname + '/app/';//where our public files are located

    //NOTE: __dirname returns the root folder that this javascript file is in.

    if(fileName === 'index.html'){//if index.html was requested...
        content = localFolder + fileName;//setup the file name to be returned

        console.log(content);

        //reads the file referenced by 'content'
        //and then calls the anonymous function we pass in
        fs.readFile(content,function(err,contents){
            //if the fileRead was successful...
            if(!err){
                //send the contents of index.html
                //and then close the request
                res.end(contents);
            } else {
                //otherwise, let us inspect the eror
                //in the console
                console.dir(err);
            };
        });
    } else {
        //if the file was not found, set a 404 header...
        res.writeHead(404, {'Content-Type': 'text/html'});
        //send a custom 'file not found' message
        //and then close the request
        res.end('<h1>Sorry, the page you are looking for cannot be found.</h1>');
    };
};

//step 2) create the server
http.createServer(requestHandler)

//step 3) listen for an HTTP request on port 3000
    .listen(3000);