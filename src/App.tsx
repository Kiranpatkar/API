import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetCall from './Components/GetCall';
import PostCall from './Components/PostCall';
import Crud from './Components/Crud';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <GetCall />
      {/* <PostCall /> */}
      {/* <Router>
        <Crud />
      </Router> */}
    </>
  );
}

export default App;
