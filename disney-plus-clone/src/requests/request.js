export const APY_KEY = `3aa5d17bb4eb238fb55f5e9e51ac7489`;
const request = {
  fetchTrending: `discover/movie?api_key=${APY_KEY}&language=en-US&sort_by=vote_average.desc&with_companies=2`,
  fetchDisneyOriginals: `discover/movie?api_key=${APY_KEY}&language=en-US&with_companies=2`,
  fetchTopRated: `discover/movie?api_key=${APY_KEY}&language=en-US&sort_by=vote_count.desc&with_companies=2`,
  fetchScienceFiction: `discover/movie?api_key=${APY_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_companies=2&with_genres=9648`,
  fetchAnimation: `discover/movie?api_key=${APY_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_companies=2&with_genres=16`,
  fetchComedyMovies: `discover/movie?api_key=${APY_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_companies=2&with_genres=35`,
  fetchThrillerMovies: `discover/movie?api_key=${APY_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_companies=2&with_genres=53`,
  fetchMysteryMovies: `discover/movie?api_key=${APY_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_companies=2&with_genres=9648`,
  fetchDocumentaries: `discover/movie?api_key=${APY_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_companies=2&with_genres=99`,
  fetchAdventure: `discover/movie?api_key=${APY_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_companies=2&with_genres=12`,
  fetchFantasy: `discover/movie?api_key=${APY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=2&with_genres=14`,
  fetchStarWars: `discover/movie?api_key=${APY_KEY}&language=en-US&with_companies=1`,
  fetchPixar: `discover/movie?api_key=${APY_KEY}&language=en-US&with_companies=3`,
  fetchMarvel: `discover/movie?api_key=${APY_KEY}&language=en-US&with_companies=420`,
  fetchSearch: `search/multi?api_key=${APY_KEY}&language=en-US&query=`,
};
export default request;
