import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/startpage/StartPAge";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
