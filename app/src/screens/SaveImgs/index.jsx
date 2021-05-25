import React from "react";
import { ImageGallery } from "../../imports/components";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../redux/actions";

const SaveImgs = () => {
  const dispatch = useDispatch();

  const saveImages = useSelector((state) => state.saveImages);

  const getImgs = async () => {
    await dispatch(getImages());
  };

  React.useEffect(() => {
    getImgs();
  }, []);

  return (
    <div className="w-full h-full relative bg-blue-200 pb-24 p-8">
      <div className="flex items-center justify-center ">
        <ImageGallery image={saveImages} notSave={true} />
      </div>
    </div>
  );
};

export default SaveImgs;
