const axios = require('axios');
const baseUrl = process.env.UNSPLASH_API;

const getPhotos = async (page, size) => {
  const url = `${baseUrl}/photos?client_id=${accessKey}&page=${page}&per_page=${size}`;
  const { data } = await axios.get(url)
  const images = data ? data.map((image) => {
    return {
      id: image.id,
      url: image.urls.full
    }
  }) : []
  return images; 
}

const searchPhotos = async (query, page, size) => {
  const url = `${baseUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}&per_page=${size}`;
    const { data } = await axios.get(url)
    const images = data && data.results ? data.results.map((image) => {
      return {
        id: image.id,
        url: image.urls.full
      }
    }) : []
    return images
}

const searchPhoto = async (query, page, size) => {
  if (!!query) {
    searchPhotos(query, page, size)
  }
  getPhotos(page, size)  
}

module.exports = {
  searchPhoto
}
