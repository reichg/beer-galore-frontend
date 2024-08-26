import LoginComponent from "./components/login/LoginComponent";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FetchBeerComponent from "./components/fetchbeercomponent/FetchBeerComponent";
import NavbarComponent from "./components/navbar/NavbarComponent";
import LandingPageComponent from "./components/landingpagecomponent/LandingPageComponent";
import ProfileComponent from "./components/profilecomponent/ProfileComponent";
import { useState } from "react";
import RegistrationComponent from "./components/registrationcomponent/RegistrationComponent";
import AddBeerComponent from "./components/addbeercomponent/AddBeerComponent";

function App() {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("user") ? true: false);
  return (
    <div>
      <NavbarComponent
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Routes>
        <Route path="/" element={<LandingPageComponent authenticated={authenticated}/>} />
        <Route path="/register" element={<RegistrationComponent />} />
        <Route
          path="/login"
          element={<LoginComponent setAuthenticated={setAuthenticated} />}
        />
        <Route path="/fetchBeer" element={<FetchBeerComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/addBeer" element={<AddBeerComponent />} />
      </Routes>
    </div>
  );
}

export default App;
