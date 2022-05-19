import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes.js'
import NavBar from './components/NavBar.js'
import MydModalWithGrid from './components/ProfileModal.js';


const App = () => {

  return (
    <>
 
    <NavBar/>
    <MydModalWithGrid  />
    <Router />
   
    </>
  );
}

export default App;