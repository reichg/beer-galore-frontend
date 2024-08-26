import { useState } from "react";
import BeerItem from "../../models/BeerItem";
import { useNavigate } from "react-router-dom";
import styles from "./addbeer.module.css";
import User from "../../models/User";
import ButtonComponent from "../globalbuttons/ButtonComponent";

function AddBeerComponent() {
  const [beerItem, setBeerItem] = useState<BeerItem>();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`e target name: ${name}`);

    setBeerItem({ ...beerItem!, [name]: value });
  };

  async function handleAddBeerSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(beerItem);
    const user: User = await JSON.parse(localStorage.getItem("user") || "{}");

    try {
      const response = await fetch(
        "http://localhost:8080/api/beer/save-a-beer",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: beerItem?.name,
            description: beerItem?.description,
            brewery: beerItem?.brewery,
            abv: beerItem?.abv,
            ibu: beerItem?.ibu,
            type: beerItem?.type,
          }), // Convert the body to a JSON string
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log(response.json());

      //   const data = await response.json();
      //   localStorage.setItem("token", data);
      //   setAuthenticated(true);

      navigate("/fetchBeer");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleAddBeerSubmit}>
        <span className={styles.addBeerTitle}>Add A Beer</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Beer Name..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="description"
          placeholder="Beer Description..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="brewery"
          placeholder="Brewery..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="abv"
          placeholder="ABV..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="ibu"
          placeholder="IBU..."
          onChange={handleChange}
          required
        ></input>
        <input
          className={styles.input}
          type="text"
          name="type"
          placeholder="Type of Beer..."
          onChange={handleChange}
          required
        ></input>
        <div className={styles.addBeerButton}>
          <ButtonComponent type="submit" text="Add Beer" />
        </div>
      </form>
    </div>
  );
}

export default AddBeerComponent;
