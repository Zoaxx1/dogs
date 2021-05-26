import * as constans from "./constans";
import axios from "axios";

const url = "http://localhost:3001/";

export const getImages = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: url + "images",
    }).then((res) => {
      if (res.status === 200) {
        return dispatch({ type: constans.GET_IMAGES, payload: res.data });
      }
    });
  };
};

export const postImages = (img) => {
  return () => {
    axios({
      method: "post",
      url: url + "images",
      data: img,
    });
  };
};

export const getNextPage = (key, page) => {
  //if the key is undefined...
  const urlSearch = !!key
    ? `${url}images/search?page=${page}&size=6&query=${key}`
    : `${url}images/search?page=${page}&size=6`;

  return (dispatch) => {
    axios({
      method: "get",
      url: urlSearch,
    }).then((res) => {
      if (res.status === 200) {
        return dispatch({
          type: constans.GET_NEXT_PAGE,
          payload: res.data,
        });
      }
    });
  };
};

export const getImagesSearch = (key, page) => {
  //if the key is undefined...
  const urlSearch = !!key
    ? `${url}images/search?page=${page}&size=6&query=${key}`
    : `${url}images/search?page=${page}&size=6`;

  return (dispatch) => {
    axios({
      method: "get",
      url: urlSearch,
    }).then((res) => {
      if (res.status === 200) {
        return dispatch({
          type: constans.GET_IMAGES_SEARCH,
          payload: res.data,
        });
      }
    });
  };
};
