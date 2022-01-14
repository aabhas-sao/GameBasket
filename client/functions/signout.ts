import axios from "axios";
import baseUrl from "../constants/routes";

const signout = async () => {
  await axios.get(`${baseUrl}/auth/logout`);
}

export default signout;