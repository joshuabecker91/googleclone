import React from 'react';
import './App.css';
import Home from './pages/Home'
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // BEM
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<SearchPage/>} path="/search" />
          <Route element={<Home/>} path ="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
