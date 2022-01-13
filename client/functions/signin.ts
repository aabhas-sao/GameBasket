import axios from "axios";
import { ERROR, SUCCESS } from "../constants/literals";
import baseUrl from "../constants/routes";

const signin = async (email: string, password: string): Promise<string> => {
  const res = await axios.post(`${baseUrl}/auth/login`, {
    email,
    password
  }, {
    withCredentials: true
  });

  if (res.status === 201) {
    return SUCCESS;
  } else {
    console.log('hey')
    alert('username or password incorrect')
    return ERROR;
  }
}

export default signin;