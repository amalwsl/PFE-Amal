
import Calendar from './pages/Calendar.tsx';
import { Chart } from './components/charts.tsx';
import User from './pages/users.js'
import Home from './pages/Home.js';
import LoginForm from './pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// ----------------------------------------------------------------------

const Routers=()=> {
    return (
        <Router>
      
        <Routes>
          <Route exact path="/calendar" element={<Calendar/>}/>
          <Route exact path="/chart" element={<Chart/>}/>
          <Route exact path="/users" element={<User/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<LoginForm/>}/>
          
        </Routes>
      
    </Router>
  
    )
   
}

export default Routers;
