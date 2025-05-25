import axios from "axios";

const PER_PAGE = 20;
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const api = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

/* Get Trending Movies */
export const getTrendingToday = async () => {
  return await api.get("trending/movie/day", {
    params: {
      language: "en-US",
      page: 1,
      per_page: 10,
    },
  });
};

/* Get Movie By ID */
export const getMovieByMovieID = async (movieID) => {
  return await api.get(`movie/${movieID}`);
};

/* Get Movie Cast By ID */
export const getMovieCastByMovieID = async (movieID) => {
  return await api.get(`/movie/${movieID}/credits`);
};

/* Get Movie review By ID */
export const getMovieReviewByMovieID = async (movieID) => {
  return await api.get(`/movie/${movieID}/reviews`);
};

/* Get Movie by Search Query */
export const getMovieBySearchQuery = async (query) => {
  return await api.get(`search/movie`, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
};
