import React from 'react';
import {RouterProvider } from 'react-router-dom';
import Router from './services/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import Navbar from './UI/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
