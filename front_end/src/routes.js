import React, { useContext } from 'react';
import Calendar from './pages/Calendar.js';
import { Chart } from './components/charts.tsx';
import MyCompany from './pages/participants/myCompany';
import OfficialDeleg from './pages/participants/officialDelegation';
import Exhibitors from './pages/participants/exhibitors';
import ProVisitors from './pages/participants/proVisitors';
import Home from './pages/Home.js';
import LoginForm from './pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import FooterPage from './components/Footer/Footer';
import './App.css';
import { AuthContext } from './context/AuthContext.js';

const CheckRouters = () => {
  const { loggedIn } = useContext(AuthContext);

  return !loggedIn ? <LoginRoute /> : <Routers />;
};

const LoginRoute = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

const Routers = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/charts" element={<Chart />} />
          <Route exact path="/users" element={<MyCompany />} />
          <Route exact path="/users/exhibitors" element={<Exhibitors />} />
          <Route exact path="/users/pro-Visitors" element={<ProVisitors />} />
          <Route
            exact
            path="/users/official-delegation"
            element={<OfficialDeleg />}
          />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>

      <FooterPage />
    </>
  );
};

export default CheckRouters;
