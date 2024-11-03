import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import s from "../../styles/Login/login.module.scss";
import m from "../../styles/App.module.scss";
import { NavLink } from "react-router-dom";

interface RegisterProps {
  onRegister: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email,
          password,
        }
      );

      if (response.status === 201) {
        toast.success(
          "You have successfully registered! Redirecting to login..."
        );
        onRegister();
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <main className={m.main}>
      <section className={s.login}>
        <div className={s.content}>
          <h1 className={s.title}>Join the Cinematic Journey</h1>
          <h4 className={s.subtitle}>
            Register now and start exploring a world of movies
          </h4>
          <form className={s.form} onSubmit={handleSubmit}>
            <label>
              <h3 className={s.formTitle}>Email*</h3>
              <input
                type="email"
                placeholder="example@mostream.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <h3 className={s.formTitle}>Password*</h3>
              <input
                type="password"
                placeholder="Create a password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className={s.loginButton} type="submit">
              Register
            </button>
          </form>
          <p className={s.registerText}>
            Already have an account?{" "}
            <NavLink to="/login" className={s.registerRoute}>
              Sign In
            </NavLink>
          </p>
          {error && <p className={s.error}>{error}</p>}
        </div>
      </section>
    </main>
  );
};

export default Register;
