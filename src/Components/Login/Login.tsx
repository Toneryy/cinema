import React, { useState } from 'react';
import s from "../../styles/Login/login.module.scss"; // Импортируем стили
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface LoginProps {
  onLogin: (token: string) => void; // Обновлено для передачи токена
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
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
      localStorage.setItem('token', data.token); // Сохранение токена в локальном хранилище
      toast.success('You have successfully logged in to the Mostream service. Enjoy watching movies!');
      onLogin(data.token); // Передаем токен родительскому компоненту
      setTimeout(() => {
        navigate('/'); // Переход на главную страницу
      }, 2000);
    } else {
      const errorData = await response.json();
      setError(errorData.message);
      toast.error(errorData.message);
      console.error('Не удалось войти:', errorData.message);
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
              type={isPasswordVisible ? 'text' : 'password'}
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
              <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
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
