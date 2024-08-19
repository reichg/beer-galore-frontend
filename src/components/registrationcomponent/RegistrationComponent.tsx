import { useState } from "react";
import User from "../../models/User";
import { useNavigate } from "react-router-dom";
import styles from "./registration.module.css";

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
        <input
          className={styles.input}
          type="text"
          name="userName"
          placeholder="username"
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="phone"
          pattern="[0-9]{10}"
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="number"
          name="age"
          placeholder="age"
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          required
        ></input>
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationComponent;
