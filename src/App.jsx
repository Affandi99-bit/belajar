import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Menu, Bermain, Belajar } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route >
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/belajar" element={<Belajar />} />
          <Route path="/bermain" element={<Bermain />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App