import { Types } from 'mongoose';

export interface Post {
  user: Types.ObjectId;
  text: string;
  location: string;
  img: string;
  likes: [
    {
      user: Types.ObjectId;
    }
  ];
  comments: [
    {
      _id: string;
      user: Types.ObjectId;
      text: string;
      date: Date;
    }
  ];
}
