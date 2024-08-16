import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  setAuthenticated: (authenticated: boolean) => void;
}

function LoginForm({ setAuthenticated }: LoginFormProps) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }), // Convert the body to a JSON string
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text();
      localStorage.setItem("token", data);
      setAuthenticated(true);

      navigate("/fetchBeer");
    } catch (error) {
      console.error("Error:", error);
      setusername("");
      setPassword("");
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputGroup}>
          <input
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
