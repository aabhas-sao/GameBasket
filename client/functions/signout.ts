import axios from "axios";
import baseUrl from "../constants/routes";

const signout = async () => {
  const res = await axios.get(`${baseUrl}/auth/logout`, { withCredentials: true });
  console.log('inside signout util', res);
}

export default signout;