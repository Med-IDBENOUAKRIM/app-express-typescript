import { Types } from 'mongoose';

export interface Profile {
  user: Types.ObjectId;
  bio: string;
}
