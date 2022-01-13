import axios from "axios";
import baseUrl from "../constants/routes";

const signup = (email: string, firstName: string, lastName: string, password: string) => {
  return axios.post(`${baseUrl}/auth/signup`, {
    email,
    firstName,
    lastName,
    password
  }, {
    withCredentials: true
  })
}

export default signup;