import React, { useState } from 'react';
import s from "../../styles/Login/login.module.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Импортируем toast

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

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
      toast.success('You successfully logged in on Mostream service. Enjoy your movies!'); // Уведомление об успехе
      onLogin();
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      const errorData = await response.json();
      setError(errorData.message);
      toast.error(errorData.message); // Уведомление об ошибке
      console.error('Login failed:', errorData.message);
    }
  };

  return (
    <section className={s.login}>
      <div className={s.content}>
        <h1>Access the Cinematic Realm with Elegance</h1>
        <p>A Refined Entrance: Secure Your Journey into a World of Timeless Film Excellence</p>
        <form className={s.form} onSubmit={handleSubmit}>
          <label>
            Email*
            <input type="email" placeholder="example@mostream.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password*
            <input type="password" placeholder="Input password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Sign In</button>
        </form>
        <button className={s.googleBtn}>Sign In with Google</button>
        <p>Don’t have an account? <NavLink to="/register">Register</NavLink></p>
        {error && <p className={s.error}>{error}</p>}
      </div>
    </section>
  );
}

export default Login;
