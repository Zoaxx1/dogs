const services = require('./service')

const searchPhoto = async (req, res) => {
  const { query: { query, page = 1, size = 10 } } = req;
  const photos = await services.searchPhoto(query, page, size);
  res.status(200).send(photos);
}

module.exports = {
  searchPhoto
}
