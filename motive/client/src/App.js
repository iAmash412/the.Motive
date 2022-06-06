import './index.css';
import React, { useState, useEffect } from 'react';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { Deploy, NavBar } from './components';

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch('/data')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => setState(data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div id="app" className="container">
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Pages.LandingPage />} />
          <Route path="/user" element={<Pages.UserPage />} />
          <Route path="/motive" element={<Pages.MotivePage />} />
          <Route path="/vibe" element={<Pages.VibePage />} />
          <Route path="/venues" element={<Pages.VenuesPage />} />
          <Route path="/venue" element={<Pages.VenuePage />} />

          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
