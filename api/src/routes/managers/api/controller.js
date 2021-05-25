const services = require('./service')

const searchImages = async (req, res) => {
  const { query: { query, page = 1, size = 10 } } = req;
  const images = await services.searchImages(query, page, size);
  res.status(200).send(images);
}

module.exports = {
  searchImages
}
