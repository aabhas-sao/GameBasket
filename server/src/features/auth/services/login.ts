import { User } from "../../users/user.entity"
import bcrypt from 'bcrypt'
import { ERROR, SUCCESS } from "./constants";

const login = async (email, password) => {
  const user = await User.find({ where: { email } });

  try {
    if (user.length === 1) {
      if (await bcrypt.compare(password, user[0].hash)) {
        return SUCCESS;
      } else {
        return "INCORRECT_PASSWORD";
      }
    } else {
      return "NO_USER_FOUND";
    }
  } catch {
    return ERROR;
  }
}

export default login;