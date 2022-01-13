import bcrypt from 'bcrypt'
import { User } from '../../users/user.entity';


const signup = async (first_name, last_name, email, password): Promise<string> => {
  const user = await User.find({
    where: {
      email
    }
  });

  if (user.length === 0) {
    const hash = await bcrypt.hash(password, 10);
    await User.create({
      email,
      hash,
      first_name,
      last_name,
    }).save();

    return "SUCCESS";
  } else {
    return "USER_EXISTS";
  }
}

export default signup;