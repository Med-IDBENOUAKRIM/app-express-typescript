import { User } from '@src/interfaces/User';
import { Schema, model } from 'mongoose';

const UserModel = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, trim: true, unique: true },
    avatar: { type: String },
    newMessagePop: { type: Boolean, default: true },
    unreadMessage: { type: Boolean, default: false },
    unreadNotification: { type: Boolean, default: false },
    role: { type: String, enum: ['user', 'root'] },
    resetToken: { type: String },
    expireToken: { type: Date },
  },
  { timestamps: true }
);

const User = model('User', UserModel);
export default User;
