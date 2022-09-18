import bcrypt from 'bcryptjs';
import { NUMBER_OF_CHARACHTER_IN_PASSWORD } from './envirenoment';

const hashedPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(+NUMBER_OF_CHARACHTER_IN_PASSWORD!);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    throw err;
  }
};

export default hashedPassword;
