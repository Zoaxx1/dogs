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
    case GET_NEXT_PAGE: {
      console.log(initialState.searchImages, "state");
      console.log(action.payload, "action");
      initialState.searchImages = [
        ...initialState.searchImages,
        ...action.payload,
      ];

      console.log(initialState.searchImages, "state");

      return state;
    }
    default:
      return state;
  }
};
