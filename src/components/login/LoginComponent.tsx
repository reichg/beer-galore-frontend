import React, { useState } from "react";
import styles from "./loginform.module.css";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../globalbuttons/ButtonComponent";

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

      const data = await response.json();
      console.log(data);

      localStorage.setItem("user", JSON.stringify(data));
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
        <input
          type="username"
          placeholder="Username..."
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        <div className={styles.loginButtonContainer}>
          <ButtonComponent type="submit" text="Log In" />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
