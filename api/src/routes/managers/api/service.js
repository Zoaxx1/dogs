const axios = require('axios');
const baseUrl = process.env.UNSPLASH_API;
const accessKey = process.env.ACCESS_KEY;

const getImages = async (page, size) => {
  const url = `${baseUrl}/photos?client_id=${accessKey}&page=${page}&per_page=${size}`;
  const { data } = await axios.get(url);
  const images = data ? data.map((image) => {
    return {
      id: image.id,
      url: image.urls.small
    }
  }) : [];
  return images; 
}

const searchImagesByQuery = async (query, page, size) => {
  const url = `${baseUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}&per_page=${size}`;
    const { data } = await axios.get(url);
    const images = data && data.results ? data.results.map((image) => {
      return {
        id: image.id,
        url: image.urls.small
      }
    }) : [];
    return images;
}

const searchImages = async (query, page, size) => {
  if (!!query) {
    return searchImagesByQuery(query, page, size);
  }
  return getImages(page, size);
}

module.exports = {
  searchImages
}
