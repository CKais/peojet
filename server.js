let http = require("http");
let fs = require("fs");
let url = require("url");

let server = http.createServer()
server.on('request', (request, response) =>  {
  fs.readFile('FirstExercice.html','utf-8', (err,data) => {
    if (err) {
      response.writeHead(404, {
        'Content-type': 'text/html; charset=utf-8' 
      })
      response.end("Ce fichier n'existe pas")
    } else{
    response.writeHead(200, {
      'Content-type': 'text/html; charset=utf-8' 
       
    })
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? '' : query.name
    data = data.replace('{{ name }}', name)
    response.end(data)
    }
  })
})
server.listen(8080)