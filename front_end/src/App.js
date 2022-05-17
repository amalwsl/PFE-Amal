import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes.js'
import NavBar from './components/NavBar.js'
import FloatingActionButtons from './components/FloatingActionButtons.js';


const App = () => {

  return (
    <>
    
    <NavBar/>
    
    <Router/>
    <FloatingActionButtons/>
   
    </>
  );
}

export default App;