import { useNavigate } from "react-router-dom";
import styles from "./landingpage.module.css";
import ButtonComponent from "../globalbuttons/ButtonComponent";

interface HomeComponentProps {
  authenticated: boolean;
}

function HomeComponent({ authenticated }: HomeComponentProps) {
  const navigate = useNavigate();
  const handleLogin = () => {
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
            <ButtonComponent onClickFunction={handleLogin} text="Login" />
          ) : null}
          {!authenticated ? (
            <ButtonComponent onClickFunction={handleRegister} text="Register" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
