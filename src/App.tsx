import LoginComponent from "./components/login/LoginComponent";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FetchBeerComponent from "./components/fetchbeercomponent/FetchBeerComponent";
import NavbarComponent from "./components/navbar/NavbarComponent";
import LandingPageComponent from "./components/landingpagecomponent/LandingPageComponent";
import ProfileComponent from "./components/profilecomponent/ProfileComponent";
import { useState } from "react";
import RegistrationComponent from "./components/registrationcomponent/RegistrationComponent";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div>
      <NavbarComponent
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/register" element={<RegistrationComponent />} />
        <Route
          path="/login"
          element={<LoginComponent setAuthenticated={setAuthenticated} />}
        />
        <Route path="/fetchBeer" element={<FetchBeerComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
      </Routes>
    </div>
  );
}

export default App;
