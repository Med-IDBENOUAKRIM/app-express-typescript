import { Profile } from '@src/interfaces/Profile';
import { Schema, model } from 'mongoose';

const ProfileSchema = new Schema<Profile>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    bio: { type: String },
  },
  { timestamps: true }
);

const Profile = model('Profile', ProfileSchema);
export default Profile;
