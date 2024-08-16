import BeerItem from "../../models/BeerItem";
import styles from "./beeritemcomponent.module.css";

interface BeerItemComponentProps {
  beerItem: BeerItem;
}

function BeerItemComponent({ beerItem }: BeerItemComponentProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{beerItem.name}</h3>
      <p className={styles.brewery}>{beerItem.brewery}</p>
      <p className={styles.abv}>ABV: {beerItem.abv}</p>
      <p className={styles.description}>{beerItem.description}</p>
      <p className={styles.ibu}>IBU: {beerItem.ibu}</p>
      <p className={styles.type}>Type: {beerItem.type}</p>
    </div>
  );
}

export default BeerItemComponent;
