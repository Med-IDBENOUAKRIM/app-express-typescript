import { Post } from '@src/interfaces/Post';
import { model, Schema } from 'mongoose';

const PostSchema = new Schema<Post>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    location: { type: String },
    img: { type: String },
    likes: [{ user: { type: Schema.Types.ObjectId, ref: 'User' } }],
    comments: [
      {
        _id: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        text: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Post = model('Post', PostSchema);
export default Post;
