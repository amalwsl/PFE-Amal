import React, { useContext, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import { AuthContext } from '../../context/AuthContext';

const LoginForm = () => {
  const [data, setData] = useState({ login: '', password: '' });
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5000/api/users/login';
      const res = await axios.post(url, data);
      if (res.data.token) {
        signIn(res.data.token, res.data.user);
        window.location = '/calendar';
      }
      // localStorage.setItem("token", res.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.login}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Welcome to IADE Tunisia</h1>
            <input
              type="email"
              placeholder="Email"
              name="login"
              onChange={handleChange}
              value={data.login}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.blue_btn}>
              Sing In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
