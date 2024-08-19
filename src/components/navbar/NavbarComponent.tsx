import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

interface NavbarComponentProps {
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
}

function NavbarComponent({
  authenticated,
  setAuthenticated,
}: NavbarComponentProps) {
  const navigate = useNavigate();
  console.log(`authenticated: ${authenticated}`);

  const handleGoToProfile = () => {
    navigate("/profile");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthenticated(false);
    navigate("/");
  };
  const handleLandingPage = () => {
    navigate("/");
  };
  const handleGoToBeers = () => {
    navigate("/fetchBeer");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeftItems}>
        <button className={styles.navButton} onClick={handleLandingPage}>
          Home
        </button>
        {authenticated ? (
          <button className={styles.navButton} onClick={handleGoToBeers}>
            See Beers
          </button>
        ) : null}
        {!authenticated ? (
          <button className={styles.navButton} onClick={handleLogin}>
            Login
          </button>
        ) : null}
        {!authenticated ? (
          <button className={styles.navButton} onClick={handleRegister}>
            Register
          </button>
        ) : null}
      </div>

      <div className={styles.navbarRightItems}>
        {authenticated ? (
          <button className={styles.navButton} onClick={handleGoToProfile}>
            Go To Profile
          </button>
        ) : null}

        {authenticated ? (
          <button
            className={`${styles.navButton} ${styles.logoutButton}`}
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default NavbarComponent;
