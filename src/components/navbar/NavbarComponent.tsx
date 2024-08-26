import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import ButtonComponent from "../globalbuttons/ButtonComponent";

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

  const handleGoToAddBeer = () => {
    navigate("/addBeer");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeftItems}>
        <ButtonComponent onClickFunction={handleLandingPage} text="Home" />
        {authenticated ? (
          <ButtonComponent onClickFunction={handleGoToBeers} text="See Beers" />
        ) : null}
        {authenticated ? (
          <ButtonComponent
            onClickFunction={handleGoToAddBeer}
            text="Add Beers"
          />
        ) : null}
        {!authenticated ? (
          <ButtonComponent onClickFunction={handleLogin} text="Login" />
        ) : null}
        {!authenticated ? (
          <ButtonComponent onClickFunction={handleRegister} text={"Register"} />
        ) : null}
      </div>

      <div className={styles.navbarRightItems}>
        {authenticated ? (
          <ButtonComponent
            onClickFunction={handleGoToProfile}
            text="Go To Profile"
          />
        ) : null}

        {authenticated ? (
          <ButtonComponent onClickFunction={handleLogout} text="Logout" />
        ) : null}
      </div>
    </div>
  );
}

export default NavbarComponent;
