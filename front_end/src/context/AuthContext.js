import React, { useState, useCallback, useEffect, useMemo } from 'react';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import moment from 'moment';

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [expDate, setExpDate] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);
  const [check, setCheck] = useState(false);
  const [users, setUsers] = useState([]);

  const [TestDate, setTestDate] = useState(Date.now() + 55000);
  const clearSessionStorage = () => {
    setUser(null);
    setLoggedIn(false);
    setToken(null);
  };

  const signIn = useCallback((token) => {
    let decodedToken;
    if (token) decodedToken = jwt_decode(token);
    setLoggedIn(true);
    setToken(token);
    setExpDate(decodedToken.exp);
    setDecodedToken(decodedToken);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        token,
        loggedIn: true,
        expDate: decodedToken.exp,
      })
    );
    sessionStorage.setItem(
      'session',
      JSON.stringify({
        token,
        loggedIn: true,
        expDate: decodedToken.exp,
      })
    );
  }, []);

  useMemo(() => {
    const userData = JSON.parse(localStorage
        .getItem('userData'));
    if (userData) {
      signIn(userData.token);
    }
  }, [signIn]);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        clearSessionStorage,
        signIn,
        user,
        setUser,
        token,
        decodedToken,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
