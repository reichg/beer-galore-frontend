import BeerItem from "./BeerItem";

interface UserProfile {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  age: number;
  roles: string[];
  triedBeers: BeerItem[];
}
export default UserProfile;
