import "./App.css";
import Home from "./pages/homePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/startpage/StartPAge";
import Nav from "./components/nav/Nav";
import Search from "./pages/searchPage/Search";
import Films from "./pages/filmsPage/Films";
import request from "../src/requests/request";
import Series from "./pages/seriesPage/Series";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/home" element={<Home />} />
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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
