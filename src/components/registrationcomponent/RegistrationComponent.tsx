import { useState } from "react";
import User from "../../models/User";
import { useNavigate } from "react-router-dom";
import styles from "./registration.module.css";
import ButtonComponent from "../globalbuttons/ButtonComponent";

function RegistrationComponent() {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`e target name: ${name}`);

    setUser({ ...user!, [name]: value });
  };

  async function handleRegisterSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user?.userName,
          firstName: user?.firstName,
          lastName: user?.lastName,
          phone: user?.phone,
          age: user?.age,
          email: user?.email,
          password: user?.password,
        }), // Convert the body to a JSON string
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log(response);

      //   const data = await response.json();
      //   localStorage.setItem("token", data);
      //   setAuthenticated(true);

      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleRegisterSubmit}>
        <span className={styles.registerTitle}>Register</span>
        <input
          className={styles.input}
          type="text"
          name="userName"
          placeholder="Username..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="firstName"
          placeholder="First Name..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="lastName"
          placeholder="Last Name..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="Phone..."
          pattern="[0-9]{10}"
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="number"
          name="age"
          placeholder="Age..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email..."
          onChange={handleChange}
          required
        ></input>
        <div className={styles.registerButton}>
        <ButtonComponent text="Register" type="submit"/>
        </div>
        
      </form>
    </div>
  );
}

export default RegistrationComponent;
