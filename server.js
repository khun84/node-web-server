const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send({
    name: 'Daniel',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'bad request'
  });
});

app.listen(3000);