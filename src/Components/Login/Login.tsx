import React, { useState } from 'react';
import s from "../../styles/Login/login.module.scss";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Импортируем toast
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Импортируем компонент FontAwesome
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Импортируем нужные иконки

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false); // Состояние для видимости пароля
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token); // Сохраняем токен в localStorage
      toast.success('You successfully logged in on Mostream service. Enjoy your movies!');
      onLogin();
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      const errorData = await response.json();
      setError(errorData.message);
      toast.error(errorData.message);
      console.error('Login failed:', errorData.message);
    }
  };

  return (
    <section className={s.login}>
      <div className={s.content}>
        <h1 className={s.title}>Access the Cinematic Realm with Elegance</h1>
        <h4 className={s.subtitle}>A Refined Entrance: Secure Your Journey into a World of Timeless Film Excellence</h4>
        <form className={s.form} onSubmit={handleSubmit}>
          <label>
            <h3 className={s.formTitle}>
              Email*
            </h3>
            <input 
              type="email" 
              placeholder="example@mostream.com" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </label>
          <label className={s.passwordWrapper}>
            <h3 className={s.formTitle}>
              Password*
            </h3>
            <input 
              type={isPasswordVisible ? 'text' : 'password'} // Переключение между текстом и паролем
              placeholder="Input password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button 
              type="button" 
              className={s.passwordToggleBtn} 
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} /> {/* Иконка для показа/скрытия пароля */}
            </button>
          </label>
          <button className={s.loginButton} type="submit">Sign In</button>
        </form>
        <button className={s.googleBtn}>Sign In with Google</button>
        <p className={s.registerText}>Don’t have an account? <NavLink to="/register" className={s.registerRoute}>Register</NavLink></p>
        {error && <p className={s.error}>{error}</p>}
      </div>
    </section>
  );
}

export default Login;
