import BeerItem from "./BeerItem";

interface BeerItemPage {
  content: BeerItem[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export default BeerItemPage;
