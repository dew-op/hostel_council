import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Noticeboard from './components/Noticeboard';
import Gallery from './components/Gallery';
import Members from './components/Members';
import Footer from './components/Footer';
import AllPhotos from './components/AllPhotos';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Landing />
              <Noticeboard />
              <Gallery />
              <Members />
              <Footer />
            </div>
          }
        />
        <Route path="/all-photos" element={<AllPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
