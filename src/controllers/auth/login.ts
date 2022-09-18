import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { SignInInput } from '@src/validators/signInInputs';
import { validate } from 'class-validator';
import HttpStatus from '@src/utils/httpStatus';
import User from '@src/models/UserModel';
import comparePassword from '@src/utils/comparePassword';
import createAccessToken from '@src/utils/createAccessToken';

const signin = async (req: Request, res: Response) => {
  try {
    const user_input = plainToClass(SignInInput, req.body);
    const { login, password } = req.body;
    const errors = await validate(user_input);

    if (errors.length) {
      let errorTexts = Array();
      for (const errorItem of errors) {
        errorTexts = errorTexts.concat(errorItem.constraints);
      }
      return res.status(HttpStatus.BAD_REQUEST).json({ error: errorTexts });
    }

    const loginWith = login.indexOf('@') > -1 ? { email: login } : { username: login };
    const user = await User.findOne(loginWith);
    if (!user) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'username or email is incorrect' });
    }

    const validePassword = await comparePassword(password, user.password);
    if (!validePassword) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'password is incorrect' });
    }

    const payload = {
      user: {
        _id: user._id,
        username: user.username,
      },
    };

    const token = createAccessToken(payload);
    return res.status(HttpStatus.OK).json({
      _id: user._id,
      token,
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
};

export default signin;
