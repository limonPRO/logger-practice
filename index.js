const express = require("express")

const app = express()

const Port = 9000

// Middleware function
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call next to pass control to the next middleware or route handler
  };
  
  // Register the middleware
  app.use(loggerMiddleware);
  
  // Define a route
  app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });
  
  app.get('/me', (req, res) => {
    res.send('Hello This is Limon');
  });
  


app.listen(Port,()=>{
    console.log('server is running ')
})