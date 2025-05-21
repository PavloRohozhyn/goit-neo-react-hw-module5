import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

import { getImageGalleryData } from "../../api/api";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";

// import css from "./App.module.css";

const cssOverride = {
  display: "block",
  margin: "0 auto",
  width: "5%",
};

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // query search data
  const [hits, setHits] = useState([]); // images data
  const [isLoading, setIsLoading] = useState(false); // loader
  const [error, setError] = useState(false); // errors
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1); // pagination
  const [maxPage, setMaxPage] = useState(1); // pagination
  const [modalOpenFlag, setModalOpenFlag] = useState(false); // modal
  const [modalImgSelected, setModalImgSelected] = useState(null);

  const modalOpen = (img) => {
    setModalImgSelected(img);
    setModalOpenFlag(true);
  };

  const modalClose = () => {
    setModalOpenFlag(false);
    setModalImgSelected(null);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  }; // load more btn handler

  const handleSearchBar = (searchQuery) => {
    setSearchQuery(searchQuery);
    setPage(1); // all time its new search query
    setMaxPage(1); // pagination, max pages
    // e.resetForm();
  }; // search form handler

  useEffect(() => {
    if (!searchQuery) return; // disable onload search
    const fetching = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { data } = await getImageGalleryData(searchQuery, page);
        setHits((prev) => {
          return page === 1 ? data.results : [...prev, ...data.results];
        });
        setMaxPage(data.total_pages);
      } catch (err) {
        setError(true);
        setHits([]);
        setErrorMessage(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, [page, searchQuery]); // api call

  return (
    <>
      {/* search box */}
      <SearchBar onSubmit={handleSearchBar} />
      {/* loader */}
      <PulseLoader
        loading={isLoading}
        cssOverride={cssOverride}
        color="#405cf5"
      />
      {/* errors  OR images*/}
      {error ? (
        <ErrorMessage msg={errorMessage} />
      ) : (
        hits && <ImageGallery imgs={hits} fn={modalOpen} />
      )}
      {/* load more btn */}
      {page < maxPage && <LoadMoreBtn fn={handleLoadMore} />}
      {/* images render */}
      {modalImgSelected && (
        <ImageModal
          modalOpenFlag={modalOpenFlag}
          modalCloseFn={modalClose}
          modalImgSelected={modalImgSelected}
        />
      )}
    </>
  );
}

export default App;
