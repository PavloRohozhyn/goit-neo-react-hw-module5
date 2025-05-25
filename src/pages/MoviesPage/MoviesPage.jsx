import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getMovieBySearchQuery } from "../../api/api";

import MovieList from "../../components/MovieList/MovieList";

import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchingDataBySearch = async () => {
      const searchQuery = searchParams.get("query");
      setQuery(() => searchQuery ?? "");
      if (searchQuery) {
        const { data } = await getMovieBySearchQuery(searchQuery);
        setData(() => {
          return data && data.results ? data.results : [];
        });
      }
    };
    fetchingDataBySearch();
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList data={data} />
    </div>
  );
};

export default MoviesPage;
