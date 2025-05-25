import { useState, useEffect } from "react";

import MovieList from "../../components/MovieList/MovieList";

import { getTrendingToday } from "../../api/api";

const HomePage = () => {
  const [hits, setHits] = useState([]); // images data
  const [isLoading, setIsLoading] = useState(false); // loader
  const [error, setError] = useState(false); // errors
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchingTrends = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { data } = await getTrendingToday();
        setHits(data.results);
      } catch (err) {
        setError(true);
        setHits([]);
        setErrorMessage(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchingTrends();
  }, []);

  return (
    <div>
      <h1>Tranding Today</h1>
      <ul>
        <MovieList data={hits} />
      </ul>
    </div>
  );
};

export default HomePage;
