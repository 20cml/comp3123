const express = require('express');
const empRouter = require('./emp');
const userRouter = require('./users');
const errorHandlerMiddleware = require('./errorHandlerMiddleware');
const app = express()
const SERVER_PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const loggerMiddleware = (req, res, next) => {
  console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`);
  next();
}

// apply the middleware to all requests -- Applicatin Level 
app.use(loggerMiddleware)

app.use('/user', userRouter) //first will be executed 
app.use('/emp', empRouter)

//Error end point 
//http://localhost:3000/error
app.get('/error', (req, res) => {
  throw new Error('this is a forced error');
  res.send('Welcome to Express error handling');
})

//http://localhost:3000/err
//app.get('/err', (req, res) => {
//  try {
//    throw new Error('This is a forced error');
//  } catch (error) {
//    next
//  }
//  res.send('Welcome to Express error handling');
//})

//Error handling middleware
app.use(errorHandlerMiddleware);

app.listen(SERVER_PORT, () => {
  console.log('server is running on port 3000');
});