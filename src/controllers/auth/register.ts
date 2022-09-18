import { Request, Response } from 'express';
import User from '@src/models/UserModel';
import HttpStatus from '@src/utils/httpStatus';
import hashedPassword from '@src/utils/hashedPassword';
import Profile from '@src/models/ProfileModel';
import createAccessToken from '@src/utils/createAccessToken';
import { SignUpInput } from '@src/validators/signupInputs';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

const signup = async (req: Request, res: Response) => {
  try {
    const new_user = plainToClass(SignUpInput, req.body);

    const errors = await validate(new_user);

    if (errors.length) {
      let errorTexts = Array();
      for (const errorItem of errors) {
        errorTexts = errorTexts.concat(errorItem.constraints);
      }
      return res.status(HttpStatus.BAD_REQUEST).json({ error: errorTexts });
    }

    const user = await User.findOne({ email: new_user.email });
    if (user) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: 'This email already exist!' });
    }

    const hashed_password = await hashedPassword(new_user.password!);

    const newUser = await User.create({
      name: new_user.name,
      email: new_user.email,
      username: new_user.username,
      password: hashed_password,
    });

    // create user's profile
    await Profile.create({ user: newUser._id, bio: new_user.bio });

    const payload = {
      user: {
        _id: newUser._id,
      },
    };

    const token = createAccessToken(payload);

    return res.status(HttpStatus.CREATED).json({ _id: newUser._id, token });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err });
  }
};

export default signup;
