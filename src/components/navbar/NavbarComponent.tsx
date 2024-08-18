import { useNavigate } from "react-router-dom";

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
  return (
    <div>
      <button onClick={handleLandingPage}>Home</button>
      {!authenticated ? (
        <button onClick={handleRegister}>Register</button>
      ) : undefined}
      {authenticated ? (
        <button onClick={handleGoToProfile}>Go To Profile</button>
      ) : undefined}
      <button onClick={handleGoToBeers}>See Beers</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default NavbarComponent;
