import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Импортируем toast
import s from "../../styles/Login/login.module.css";

interface RegisterProps {
  onRegister: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
      });

      if (response.status === 201) {
        toast.success('You have successfully registered! Redirecting to login...'); // Уведомление об успехе
        onRegister();
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err) {
      console.error('Error during registration:', err);
      setError('Registration failed. Please try again.');
      toast.error('Registration failed. Please try again.'); // Уведомление об ошибке
    }
  };

  return (
    <div className={s.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        {error && <p className={s.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
