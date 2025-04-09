const express = require('express');
const testRouter = require('./routes/testRoutes');

const app = express();

// parse the request body
app.use(express.json());

app.use('/posts', testRouter);

module.exports = app;