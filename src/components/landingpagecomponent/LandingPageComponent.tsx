import { useNavigate } from "react-router-dom";
import styles from "./landingpage.module.css";

interface HomeComponentProps {
  authenticated: boolean;
}

function HomeComponent({ authenticated }: HomeComponentProps) {
  const navigate = useNavigate();
  const handleGoToLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}> Welcome to Beer Galore!</h1>
        <p className={styles.subtitle}>Start your Beer Journey</p>
        <div className={styles.buttonContainer}>
          {!authenticated ? (
            <button className={styles.button} onClick={handleGoToLogin}>
              Login
            </button>
          ) : null}
          {!authenticated ? (
            <button className={styles.button} onClick={handleRegister}>
              Register
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
