import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import HttpStatus from '@src/utils/httpStatus';
import { ACCESS_TOKEN_SECRET } from '@src/utils/envirenoment';

export interface CustomRequest extends Request {
  user: string | JwtPayload;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token!, ACCESS_TOKEN_SECRET!);

    if (!user) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ error: 'No token, Authorization denied' });
    }
    (req as CustomRequest).user = user;

    next();
  } catch (err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err });
  }
};

export default authMiddleware;
