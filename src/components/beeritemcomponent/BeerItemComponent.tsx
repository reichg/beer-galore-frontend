import { useState } from "react";
import BeerItem from "../../models/BeerItem";
import User from "../../models/User";
import styles from "./beeritemcomponent.module.css";
import ButtonComponent from "../globalbuttons/ButtonComponent";
// import StarRating from "../starratingcomponent/StarRatingComponent";

interface BeerItemComponentProps {
  beerItem: BeerItem;
}
function getUser() {
  return JSON.parse(localStorage.getItem("user") || "{}");
}
function BeerItemComponent({ beerItem }: BeerItemComponentProps) {
  const [rating, setRating] = useState(0);
  const user: User = getUser();

  // const handleRatingChange = (newRating: number) => {
  //   setRating(newRating);
  // };

  const handleTryBeerClick = async () => {
    // Function to fetch data

    try {
      const response = await fetch(
        `http://localhost:8080/api/beer/add-beer-to-user-list?beerItemId=${
          beerItem.beerItemId
        }&userId=${user.userId}&rating=${rating != 0 ? rating : 5}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the JSON data
      const data = await response.json();
      console.log(data);

      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  return (
    <div className={styles.card} key={beerItem.beerItemId}>
      <div className={styles.beerInformation}>
        <h3 className={styles.title}>{beerItem.name}</h3>
        <p className={styles.brewery}>{beerItem.brewery}</p>
        <p className={styles.description}>{beerItem.description}</p>
        <p className={styles.abv}>ABV: {beerItem.abv}</p>
        <p className={styles.ibu}>IBU: {beerItem.ibu}</p>
        <p className={styles.type}>Type: {beerItem.type}</p>
      </div>
      <div className={styles.tryBeerButton}>
        <ButtonComponent
          onClickFunction={handleTryBeerClick}
          text="Tried This Beer"
        />
        {/* <StarRating rating={rating} onRatingChange={handleRatingChange} /> */}
      </div>
    </div>
  );
}

export default BeerItemComponent;
