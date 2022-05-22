
import Calendar from './pages/Calendar.tsx';
import { Chart } from './components/charts.tsx';
import User from './pages/users.js'
import Home from './pages/Home.js';
import LoginForm from './pages/login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import FooterPage from './components/Footer/Footer';
import './App.css'




const CheckRouters = () =>{
  const user = localStorage.getItem("token");

  return(
    window.location.pathname==="/login"  ? <LoginRoute/> : <Routers/>
  )
}

const LoginRoute=()=>{
  return(
    <Router>
      <Routes>
       <Route exact path="/login" element={<LoginForm/>}/>
      </Routes>
    </Router>
  )
}

 const Routers = () => {
  return(
    <>
    <NavBar/>
        
        <Router>    
          <Routes>
            <Route exact path="/calendar" element={<Calendar/>}/>
            <Route exact path="/chart" element={<Chart/>}/>
            <Route exact path="/users" element={<User />}/>
            <Route exact path="/" element={<Home/>}/>      
          </Routes>
        </Router>
      
        <FooterPage/>
    
       </>
)
 }
   


export default CheckRouters;
