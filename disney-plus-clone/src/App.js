import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/startpage/StartPAge";
import Nav from "./components/nav/Nav";
import Search from "./components/search/Search";
import Films from "./components/films/Films";
import request from "../src/requests/request";
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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
