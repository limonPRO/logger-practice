# logger-practice
example of using logger middleware in node js app 

* In this example, we define a middleware function called loggerMiddleware that logs the timestamp, HTTP method, and URL of each incoming request. We register the middleware using app.use(), which makes it apply to all routes. The next() function is called to pass control to the next middleware or route handler in the chain.
