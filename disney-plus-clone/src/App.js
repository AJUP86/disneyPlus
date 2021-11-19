import "./App.css";
import MovieList from "./components/movieList/MovieList";
import request from "./requests/request";

function App() {
  return (
    <div className="App">
      <MovieList
        title="New on Disney+"
        fetchUrl={request.fetchDisneyOriginals}
      />
      <MovieList title="Top Rated" fetchUrl={request.fetchTopRated} />
      <MovieList title="Trending now" fetchUrl={request.fetchTrending} />
      <MovieList title="Star Wars" fetchUrl={request.fetchStarWars} />
    </div>
  );
}

export default App;
