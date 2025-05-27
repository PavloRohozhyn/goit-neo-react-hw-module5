import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { useSearchParams } from "react-router-dom";
import { getMovieBySearchQuery } from "../../api/api";
import SearchBox from "../../components/SearchBox/SearchBox";

import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchingDataBySearch = async () => {
      const searchQuery = searchParams.get("query");
      if (searchQuery) {
        const { data } = await getMovieBySearchQuery(searchQuery);
        setData(() => {
          return data && data.results ? data.results : [];
        });
      }
      setQuery(() => searchQuery ?? "");
    };
    fetchingDataBySearch();
  }, [searchParams]);

  const handleSubmit = (query) => {
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchBox onSubmit={handleSubmit} />
      <MovieList data={data} />
    </div>
  );
};

export default MoviesPage;
