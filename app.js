const express = require('express');
const routes = require('./routes');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // http://localhost:8080, https://salt-spa-project-bucket.s3.eu-north-1.amazonaws.com/index.html
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') return res.send();
  return next();
});

app.use('/api', routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500);
  return res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports.app = app;
