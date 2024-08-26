import BeerItemPage from "./BeerItemPage";

interface UserProfile {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  age: number;
  roles: string[];
  triedBeers: BeerItemPage;
}
export default UserProfile;
