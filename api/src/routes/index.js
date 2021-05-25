const { Router } = require('express');
const { getRedis, setRedis } = require('../redis')
const { IMAGE } = require('../redis/keys')
const { searchPhoto } = require('./managers/api/controller');

const app = Router();

app.get('/', (req, res) => {
  res.send('Hello Wisboo')
})

app.get('/images/search', searchPhoto)

app.post('/images', async (req, res) => {
  const { body: { id, url } } = req
  const newImage = {
    id, url
  }
  await setRedis(IMAGE, newImage)
  res.status(201).send({
    message: 'created'
  })
})

app.get('/images', async (req, res) => {
  const { query: { page = 1, size = 10 } } = req;
  const images = await getRedis(IMAGE)
  const start = (page * size) - size;
  const end = page * size;
  const paginatedImages = images.splice(start, end)
  res.status(200).send(paginatedImages)
})

module.exports = app
