const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  trending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  tvPopular: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`,
  tvTopRated: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`, // Netflix originals
};

export default requests;