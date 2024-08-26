import { useEffect, useState } from "react";
import UserProfile from "../../models/UserProfile";
import BeerItemComponent from "../beeritemcomponent/BeerItemComponent";
import styles from "./profile.module.css";
import User from "../../models/User";
import ButtonComponent from "../globalbuttons/ButtonComponent";
import { useNavigate } from "react-router-dom";

function ProfileComponent() {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUserProfile() {
      // const TOKEN = await getToken();
      try {
        const user: User = await JSON.parse(
          localStorage.getItem("user") || "{}"
        );
        const URL = `http://localhost:8080/api/user/${user.userId}/home`;
        // response from API
        const res = await fetch(`${URL}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        //   get structure from the response (json)
        const data = await res.json();
        console.log(data);
        setUserProfile(data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserProfile();

  }, []);

  const handleSeeBeers = () => {
    navigate("/fetchBeer");
  };
  if (!isLoaded) {
    // Render nothing (or a loading indicator) while loading
    return ( <div>Loading...</div>);
  }
  return (
    <div>
      <div className={styles.card}>
        <span className={styles.username}>Hello, {userProfile?.username}!</span>
        <div className={styles.item}>
          <span className={styles.label}>First Name:</span>
          {userProfile?.firstName}
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Last Name:</span>
          {userProfile?.lastName}
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Age:</span>
          {userProfile?.age}
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Email:</span>
          {userProfile?.email}
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Phone:</span>
          {userProfile?.phone}
        </div>
        <div className={styles.item}>
          <span className={styles.label}>User ID:</span>
          {userProfile?.userId}
        </div>
      </div>
      <div>
        <div className={styles.triedBeersTitleContainer}>
          <span className={styles.beerEmoji}>🍺</span>
          <span className={styles.triedBeersTitleText}>Tried Beers</span>
          <span className={styles.beerEmoji}>🍺</span>
        </div>

        {userProfile?.triedBeers ? (
          <div className={styles.beerItemContainer}>
            {userProfile?.triedBeers?.content.map((triedBeer) => (
              <div key={triedBeer.beerItemId}>
                <BeerItemComponent beerItem={triedBeer} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.youNeedToTryBeerTextContainer}>
            <span className={styles.youNeedToTryBeerText}>
              It Looks like you have not tried any beers yet!
            </span>
            <span className={styles.goTryBeersButton}>
              <ButtonComponent
                text="Try Beers"
                onClickFunction={handleSeeBeers}
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileComponent;
