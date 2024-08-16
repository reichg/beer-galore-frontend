import { useEffect, useState } from "react";
import BeerItem from "../../models/BeerItem";
import BeerItemComponent from "../beeritemcomponent/BeerItemComponent";

function FetchBeer() {
  const [beerItems, setBeerItems] = useState<BeerItem[]>([]);

  const URL = "http://localhost:8080/api/beer/search";

  // syntax for use effect (callback, list of dependencies)
  useEffect(() => {
    async function fetchBeers() {
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
      setBeerItems(data.content);
    }
    fetchBeers();
  }, []);

  return (
    <div>
      {beerItems.map((beerItem) => (
        <BeerItemComponent beerItem={beerItem} />
      ))}
    </div>
  );
}

export default FetchBeer;
