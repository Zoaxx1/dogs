import React from "react";
import { ImageGallery } from "../../imports/components";
import { useSelector, useDispatch } from "react-redux";
import { getImagesSearch, getNextPage } from "../../redux/actions";

const SearchImgs = () => {
  const dispatch = useDispatch();

  const imagesSearch = useSelector((state) => state.searchImages);

  const [page, setPage] = React.useState(1);
  const [searching, setSearch] = React.useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const nextPage = async () => {
    await dispatch(getNextPage(searching, page + 1));
    setPage(page + 1);
  };

  const getSearch = async () => {
    await dispatch(getImagesSearch(searching, page));
  };

  React.useEffect(() => {
    setPage(1);
    getSearch();
  }, []);

  return (
    <div className="w-full h-full relative bg-blue-200 pb-24">
      <div className="flex items-center justify-center ">
        <div className="flex absolute top-0">
          <input className="w-80 h-8 rounded-sm" onChange={onChangeSearch} />
          <button
            className="bg-blue-500 text-blue-300 p-1 ml-2 rounded-sm"
            onClick={getSearch}
          >
            Search
          </button>
        </div>

        <ImageGallery image={imagesSearch} />
      </div>
      <div className="flex items-center justify-center mt-12">
        <button
          className="bg-blue-500 text-2xl py-4 px-8 text-blue-300 rounded"
          onClick={nextPage}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default SearchImgs;
