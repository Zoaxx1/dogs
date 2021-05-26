import { GET_IMAGES, GET_IMAGES_SEARCH, GET_NEXT_PAGE } from "./constans";

var initialState = {
  searchImages: null,
  saveImages: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES: {
      initialState.saveImages = action.payload;
    }
    case GET_IMAGES_SEARCH: {
      initialState.searchImages = action.payload;
      return state;
    }
    //GET_NEXT_PAGE is to adding to the array of imgs, other news
    case GET_NEXT_PAGE: {
      initialState.searchImages = [
        ...initialState.searchImages,
        ...action.payload,
      ];

      return state;
    }
    default:
      return state;
  }
};
