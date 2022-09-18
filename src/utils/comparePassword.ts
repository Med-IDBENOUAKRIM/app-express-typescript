import bcrypt from 'bcryptjs';

const comparePassword = async (password: string, userPassword: string) => {
  try {
    const validePassword = await bcrypt.compare(password, userPassword);
    return validePassword;
  } catch (error) {
    throw new Error();
  }
};

export default comparePassword;
