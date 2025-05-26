import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = query.trim();
    if (!v1) {
      toast.error("Please enter a search keywords");
      return;
    }
    setSearchParams({ query });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.formWrap}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
      <MovieList data={data} />
    </div>
  );
};

export default MoviesPage;
