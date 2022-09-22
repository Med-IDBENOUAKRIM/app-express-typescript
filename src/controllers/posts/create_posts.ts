import { Request, Response } from 'express';
import User from '@src/models/UserModel';
import Post from '@src/models/PostModel';
import HttpStatus from '@src/utils/httpStatus';

const createPost = async (req: Request, res: Response) => {
  try {
    const { user } = req.user;
    console.log(user);
    return res.status(HttpStatus.OK).json({ msg: 'TEST' });
  } catch (err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err });
  }
};

export default createPost;
