const API_KEY = "d9e34b1de36f2eba869710fb4073bdc8";

const Requests = {
  fetchAction: `/discover/movie?api_key=${API_KEY}&language=en-US&include_video=true&with_genres=28`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
  fetchTrending: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
};

export default Requests;
