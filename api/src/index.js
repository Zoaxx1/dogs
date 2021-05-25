require('dotenv').config()
const express = require('express')
const axios = require('axios')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3001
const accessKey = process.env.ACCESS_KEY
const { getRedis, setRedis } = require('./redis')
const { IMAGE } = require('./redis/keys')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(bodyParser.json({limit: '50mb'}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/images/search', async (req, res) => {
  const { data } = await axios.get(`https://api.unsplash.com/photos?client_id=${accessKey}`)
  const images = data.map((image) => {
    return {
      id: image.id,
      url: image.urls.full
    }
  })
  res.status(200).send(images)
})

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
  const images = await getRedis(IMAGE)
  res.status(200).send(images)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})