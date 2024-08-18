import { useEffect, useState } from "react";
import UserProfile from "../../models/UserProfile";
import BeerItemComponent from "../beeritemcomponent/BeerItemComponent";
import styles from "./profile.module.css";
import User from "../../models/User";

function ProfileComponent() {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  useEffect(() => {
    async function fetchUserProfile() {
      // const TOKEN = await getToken();

      const user: User = await JSON.parse(localStorage.getItem("user") || "{}");
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
    }
    fetchUserProfile();
  }, []);
  return (
    <div>
      <div className={styles.card}>
        <p className={styles.username}>{userProfile?.username}</p>
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
        <div>
          <h3>Tried Beers: </h3>
        </div>
        <div className={styles.beerItemContainer}>
          {userProfile?.triedBeers? (
            userProfile?.triedBeers?.content.map((triedBeer) => (
              <div key={triedBeer.beerItemId}>
                <BeerItemComponent beerItem={triedBeer} />
              </div>
            ))
          ) : (
            <strong>You Need To try Some Beers.</strong>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
