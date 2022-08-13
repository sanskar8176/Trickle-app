import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Switch ke jgh Routes use hone lga hai
