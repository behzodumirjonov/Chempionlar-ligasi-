import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import PastMatches from './pages/PastMatches';
import UpcomingMatches from './pages/UpcomingMatches';
import Facts from './pages/Facts';
import ExpertOpinions from './pages/ExpertOpinions';
import MatchDetail from './pages/MatchDetail';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-champions-dark text-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/past-matches" element={<PastMatches />} />
            <Route path="/upcoming-matches" element={<UpcomingMatches />} />
            <Route path="/match/:id" element={<MatchDetail />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/expert-opinions" element={<ExpertOpinions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
