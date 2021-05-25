const { Router } = require('express');
const { searchImages } = require('./managers/api/controller');
const { getSavedImages, saveImage } = require('./managers/favoriteImages/controller');

const app = Router();

app.get('/', (req, res) => {
  res.send('Hello Wisboo')
});

app.get('/images/search', searchImages);

app.get('/images', getSavedImages);
app.post('/images', saveImage);

module.exports = app
