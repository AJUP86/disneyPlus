export const APY_KEY = `3aa5d17bb4eb238fb55f5e9e51ac7489`;
const request = {
  //movies
  fetchTrending: `discover/movie?api_key=${APY_KEY}&language=en-US&sort_by=vote_average.desc&with_companies=2`,
  fetchDisneyOriginals: `discover/movie?api_key=${APY_KEY}&language=en-US&with_companies=2`,
  fetchTopRated: `discover/movie?api_key=${APY_KEY}&language=en-US&sort_by=vote_count.desc&with_companies=2`,
  fetchAnimation: `discover/movie?api_key=${APY_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_companies=2&with_genres=16`,
  fetchStarWars: `discover/movie?api_key=${APY_KEY}&language=en-US&with_companies=1`,
  fetchPixar: `discover/movie?api_key=${APY_KEY}&language=en-US&with_companies=3`,
  fetchMarvel: `discover/movie?api_key=${APY_KEY}&language=en-US&with_companies=420`,
  //search query
  fetchSearch: `search/multi?api_key=${APY_KEY}&language=en-US&query=`,
  //series
  fetchDisneyShows: `discover/tv?api_key=${APY_KEY}&language=en-US&include_null_first_air_dates=false&with_companies=2`,
  fetchStarShows: `discover/tv?api_key=${APY_KEY}&language=en-US&with_companies=25`,
  fetchNatGeo: `discover/tv?api_key=${APY_KEY}&language=en-US&with_companies=7521`,
};
export default request;
