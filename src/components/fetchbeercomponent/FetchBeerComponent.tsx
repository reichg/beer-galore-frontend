import { useEffect, useState } from "react";
import BeerItem from "../../models/BeerItem";
import BeerItemComponent from "../beeritemcomponent/BeerItemComponent";
import User from "../../models/User";
import styles from "./fetchbeer.module.css";
import PageComponent from "../pagecomponent/PageComponent";

function FetchBeer() {
  const [beerItems, setBeerItems] = useState<BeerItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const URL = "http://localhost:8080/api/beer/search";

  // syntax for use effect (callback, list of dependencies)
  useEffect(() => {
    async function fetchBeers() {
      // const TOKEN = await getToken();
      const user: User = JSON.parse(localStorage.getItem("user") || "{}");

      // response from API
      const res = await fetch(`${URL}?`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      //   get structure from the response (json)
      const data = await res.json();
      console.log(data);
      setBeerItems(data.content);
      setIsLoaded(true);
    }
    fetchBeers();
  }, []);
  if (!isLoaded) {
    // Render nothing (or a loading indicator) while loading
    return ( <div>Loading...</div>);
  }
  return (
    <div>
      <div className={styles.beerCardContainer}>
        {beerItems.map((beerItem) => (
          <div key={beerItem.beerItemId}>
            <BeerItemComponent beerItem={beerItem} />
          </div>
        ))}
      </div>
      <div>
        {<PageComponent/> }
      </div>
    </div>
  );
}

export default FetchBeer;
