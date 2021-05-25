import React from "react";
import { postImages } from "../../redux/actions";
import { useDispatch } from "react-redux";

const ImageGallery = (props) => {
  const dispatch = useDispatch();

  const saveImg = async (img) => {
    await dispatch(postImages(img));
  };

  return (
    <div className="mt-12 grid gap-4 grid-cols-3">
      {props.image &&
        props.image.map((img) => (
          <div className="relative">
            {!props.notSave && (
              <button
                onClick={() => saveImg(img)}
                className="absolute top-2 right-2 bg-blue-500 text-base px-2 py-1 text-blue-300 rounded"
              >
                {" "}
                Guardar{" "}
              </button>
            )}
            <img
              src={img.url}
              className="rounded border-blue-700 border-2"
              style={{ width: 500, height: 200 }}
            />
          </div>
        ))}
    </div>
  );
};

export default ImageGallery;
