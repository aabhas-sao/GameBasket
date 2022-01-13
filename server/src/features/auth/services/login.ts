import { User } from "../../users/user.entity"
import bcrypt from 'bcrypt'

const login = async (username, password) => {
  const user = await User.findOne(username);
  console.log(user);
  // if (user) {
  //   if (await bcrypt.compare(password, );
  //   return true;
  // }

  // return false;
}

export default login;