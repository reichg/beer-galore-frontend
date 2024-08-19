import { useEffect, useState } from "react";
import BeerItem from "../../models/BeerItem";
import BeerItemComponent from "../beeritemcomponent/BeerItemComponent";
import User from "../../models/User";
import styles from "./fetchbeer.module.css";

function FetchBeer() {
  const [beerItems, setBeerItems] = useState<BeerItem[]>([]);

  const URL = "http://localhost:8080/api/beer/search";

  // syntax for use effect (callback, list of dependencies)
  useEffect(() => {
    async function fetchBeers() {
      // const TOKEN = await getToken();
      const user: User = JSON.parse(localStorage.getItem("user") || "{}");
      console.log(user);

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
    }
    fetchBeers();
  }, []);

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
        {/* <PageComponent/> */}
      </div>
    </div>
  );
}

export default FetchBeer;
