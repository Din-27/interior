import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages';
import React from 'react';
import './App.css';



function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
    </Routes>
  );
}

export default App;
