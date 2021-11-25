import "./App.css";
import Home from "./pages/homePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/startpage/StartPAge";
import Nav from "./components/nav/Nav";
import Search from "./pages/searchPage/Search";
import Films from "./pages/filmsPage/Films";
import Series from "./pages/seriesPage/Series";
import Trailer from "../src/pages/trailerPage/Trailer";
import YoutubeProvider from "./context/YoutubeContext";
import request from "./requests/request";
function App() {
  return (
    <>
      <YoutubeProvider>
        <div className="App">
          <Router>
            <Nav />
            <Routes>
              <Route path="/" exact element={<StartPage />} />
              <Route
                path="/home"
                element={
                  <Home
                    banner={request.fetchTopRated}
                    disney={request.fetchDisneyOriginals}
                    animation={request.fetchAnimation}
                    starWars={request.fetchStarWars}
                    marvel={request.fetchMarvel}
                    trending={request.fetchTrending}
                    topRated={request.fetchTopRated}
                    shows={request.fetchDisneyShows}
                    pixar={request.fetchPixar}
                    natGeo={request.fetchNatGeo}
                    starShows={request.fetchStarShows}
                  />
                }
              />
              <Route
                path="/search"
                element={<Search query={request.fetchSearch} />}
              />
              <Route
                path="/films"
                element={
                  <Films
                    disney={request.fetchDisneyOriginals}
                    animation={request.fetchAnimation}
                    starWars={request.fetchStarWars}
                    marvel={request.fetchMarvel}
                    trending={request.fetchTrending}
                    topRated={request.fetchTopRated}
                  />
                }
              />
              <Route
                path="/series"
                element={
                  <Series
                    disneyShow={request.fetchDisneyShows}
                    star={request.fetchStarShows}
                    natGeo={request.fetchNatGeo}
                  />
                }
              />
              <Route path="/:movieName" element={<Trailer />} />
            </Routes>
          </Router>
        </div>
      </YoutubeProvider>
    </>
  );
}

export default App;
