import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import { NavBar } from "./components/NavBar";
import GamesListPage from "./pages/GamesListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/games-list" element={<GamesListPage />} exact />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
