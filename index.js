const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// files stored in the public directory are served to anyone who visits the url, store the .js and .css files there so the .html can access them
app.use(express.static(__dirname + '/public'));

// if we get a request at the base url, send index.html as a response
app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname });
});

//for testing purposes
app.get('/api/latin-english', (req, res) => {
  const URL = 'https://www.latin-is-simple.com/api/vocabulary/search/?format=json&forms_only=false&query=puella';
  fetch(URL)
    .then((response) => response.text())
    .then((body) => {
      res.send(body);
    })
});

// if the server recieves a request at /latin-english/<user text here>, then grab the user text and use it for the api call
app.get('/api/latin-english/:text', (req, res) => {
  const URL = 'https://www.latin-is-simple.com/api/vocabulary/search/?format=json&forms_only=false&query=' + req.params.text;
  fetch(URL)
    .then((response) => response.text())
    .then((body) => {
      res.send(body);
    })
});

//start listening on port 3000
app.listen(3000, () => console.log('server started'));