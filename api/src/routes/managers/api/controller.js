const services = require('./service')

//we can send the page to have more images and with the size we said to the api bring this quantity
const searchImages = async (req, res) => {
  const { query: { query, page = 1, size = 10 } } = req;
  const images = await services.searchImages(query, page, size);
  res.status(200).send(images);
}

module.exports = {
  searchImages
}
