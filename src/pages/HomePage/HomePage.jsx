import { useState, useEffect } from "react";

import MovieList from "../../components/MovieList/MovieList";

import { getTrendingToday } from "../../api/api";

const HomePage = () => {
  const [hits, setHits] = useState([]); // images data

  useEffect(() => {
    const fetchingTrends = async () => {
      const { data } = await getTrendingToday();
      setHits(data.results);
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
