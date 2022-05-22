import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes.js'


const App = () => {
  
  const user = localStorage.getItem("token");


  return (
    <>
    
    <Router  />
   
    </>
  );
}

export default App;