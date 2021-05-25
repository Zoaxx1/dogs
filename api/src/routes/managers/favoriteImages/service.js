const { getRedis, setRedis } = require('../../../redis')
const redisKey = require('../../../redis/keys')

const saveImage = async ({ id, url }) => {
  let images = await getRedis(redisKey.IMAGES);
  if (!images) {
    images = [];
  }
  const newImage = {
    id, url
  };
  images.push(newImage)
  await setRedis(redisKey.IMAGES, images);
  return newImage;
}

const getSavedImages = async (page, size) => {
  const images = await getRedis(redisKey.IMAGES);
  const start = (page * size) - size;
  const end = page * size;
  const paginatedImages = images ? images.splice(start, end) : [];
  return paginatedImages;
}

module.exports = {
  saveImage,
  getSavedImages
}
