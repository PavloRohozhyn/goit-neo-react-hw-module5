// import { PulseLoader } from "react-spinners";

import { Routes, Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";

import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

// import SearchBar from "../SearchBar/SearchBar";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import ImageGallery from "../ImageGallery/ImageGallery";
// import ImageModal from "../ImageModal/ImageModal";

// import css from "./App.module.css";

// const cssOverride = {
//   display: "block",
//   margin: "0 auto",
//   width: "5%",
// };

function App() {
  // const [searchQuery, setSearchQuery] = useState(""); // query search data

  // const [page, setPage] = useState(1); // pagination
  // const [maxPage, setMaxPage] = useState(1); // pagination
  // const [modalOpenFlag, setModalOpenFlag] = useState(false); // modal
  // const [modalImgSelected, setModalImgSelected] = useState(null);

  // const modalOpen = (img) => {
  //   setModalImgSelected(img);
  //   setModalOpenFlag(true);
  // };

  // const modalClose = () => {
  //   setModalOpenFlag(false);
  //   setModalImgSelected(null);
  // };

  // const handleLoadMore = () => {
  //   setPage(page + 1);
  // }; // load more btn handler

  // const handleSearchBar = (searchQuery) => {
  //   setSearchQuery(searchQuery);
  //   setPage(1); // all time its new search query
  //   setMaxPage(1); // pagination, max pages
  //   // e.resetForm();
  // }; // search form handler

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <SearchBar onSubmit={handleSearchBar} />
      <PulseLoader
        loading={isLoading}
        cssOverride={cssOverride}
        color="#405cf5"
      />
      {error ? (
        <ErrorMessage msg={errorMessage} />
      ) : (
        hits && <ImageGallery imgs={hits} fn={modalOpen} />
      )}
      {page < maxPage && <LoadMoreBtn fn={handleLoadMore} />}
      {modalImgSelected && (
        <ImageModal
          modalOpenFlag={modalOpenFlag}
          modalCloseFn={modalClose}
          modalImgSelected={modalImgSelected}
        />
      )} */}
    </>
  );
}

export default App;
