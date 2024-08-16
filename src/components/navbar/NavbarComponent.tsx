import { useNavigate } from "react-router-dom";

interface NavbarComponentProps {
  authenticated: boolean;
  // registered: boolean;
  setAuthenticated: (authenticated: boolean) => void;
}

function NavbarComponent({
  authenticated,
  setAuthenticated,
}: NavbarComponentProps) {
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    navigate("/profile");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleRegister}>Register</button>
      {authenticated ? (
        <button onClick={handleGoToProfile}>Go To Profile</button>
      ) : undefined}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default NavbarComponent;
