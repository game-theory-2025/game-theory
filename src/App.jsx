// src/App.jsx
import React, { useState } from 'react';
import Home from './pages/home';
import About from './pages/about'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';

function App () {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout> <Home /> </Layout>} />
          <Route path="/about" element={<Layout><About /> </Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;