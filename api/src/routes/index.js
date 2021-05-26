const { Router } = require('express');
const { searchImages } = require('./managers/api/controller');
const { getSavedImages, saveImage } = require('./managers/favoriteImages/controller');

const app = Router();

app.get('/', (req, res) => {
  res.send('Hello Wisboo')
});

//get random images 
//and
//get specific images from a query you pass
app.get('/images/search', searchImages);

//get all saved images
app.get('/images', getSavedImages);

//post to save a image
app.post('/images', saveImage);

module.exports = app
