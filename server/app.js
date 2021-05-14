const http = require('http')
const fs = require('fs')
const path = require('path')
 
// var
const content = 'Some ttttttttttttt content!'
const port = process.env.PORT || 5000;
var message = ''

// fs.writeFile
fs.writeFile(path.join(__dirname, '../' + '/test.txt'), content, err => {
  if (err) {
    message = JSON.stringify(err)
  }else{
    message = 'file written successfully'
  } 
})

// http.createServer 
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(`<p style="color: green"> Message: ${message}! </p>`)
})

server.listen(port , () => {
  console.log(`Server running at port ${port}`)
})

