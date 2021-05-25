const services = require('./service')

const saveImage = async (req, res) => {
  const { body: { id, url } } = req;
  const image = await services.saveImage({ id, url });
  res.status(201).send({
    message: 'image saved successfuly',
    data: image
  });
}

const getSavedImages = async (req, res) => {
  const { query: { page = 1, size = 10 } } = req;
  const images = await services.getSavedImages(page, size);
  res.status(200).send(images);
}

module.exports = { getSavedImages, saveImage };
