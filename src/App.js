import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
