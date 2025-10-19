const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
};

export default requests;