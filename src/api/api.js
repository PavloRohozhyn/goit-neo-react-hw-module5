import axios from "axios";
// import raw_data from "../../data.json";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmZmY2JmNWI1ZGQwYmY1NzU0NWRkZDMxMTZlMjQ1MCIsIm5iZiI6MTc0NzkyMjI5MS42OTIsInN1YiI6IjY4MmYyZDczYjMzNzliN2Q5OWQ1YzEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kDfzOB_6uUhkRPp40Zk-mqkTCqudLpGTw6ZsLg7TYn8";
const PER_PAGE = 20;
axios.defaults.baseURL = "https://api.themoviedb.org";

// '/3/search/movie?include_adult=false&language=en-US&page=1';

const api = axios.create({
  headers: {
    Authorization: { API_KEY },
  },
});

export const getImageGalleryData = async (searchQuery, page = 1) => {
  const data = await api.get("/search/photos", {
    params: {
      query: searchQuery,
      page,
      per_page: PER_PAGE,
    },
  });

  // const data = raw_data;
  return data;
};
