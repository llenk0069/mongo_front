import React from 'react';
import {RouterProvider } from 'react-router-dom';
import Router from './services/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}/>
      <p>test</p>
    </div>
  );
}

export default App;
