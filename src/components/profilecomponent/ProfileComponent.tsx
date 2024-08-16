import { useEffect, useState } from "react";
import UserProfile from "../../models/UserProfile";
import BeerItemComponent from "../beeritemcomponent/BeerItemComponent";
import styles from "./profile.module.css";

const URL = "http://localhost:8080/api/user/6/home";
function ProfileComponent() {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  useEffect(() => {
    async function fetchUserProfile() {
      // const TOKEN = await getToken();
      // response from API
      const res = await fetch(`${URL}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
      <h3>Tried Beers: </h3>
      {userProfile?.triedBeers ? (
        userProfile?.triedBeers?.map((triedBeer) => (
          <div key={triedBeer.beerItemId}>
            <BeerItemComponent beerItem={triedBeer} />
          </div>
        ))
      ) : (
        <strong>You Need To try Some Beers.</strong>
      )}
    </div>
  );
}

export default ProfileComponent;
