const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a> 
        `)
      }
})

//in href using the link https://chat.openai.com/c/962914d4-58a6-4064-a17e-d490a0ade6ca only brings back to home page
server.listen(5000)