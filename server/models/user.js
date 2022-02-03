import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    surname: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    telephone: {
      type: String,
      required: true,
      min: 6,
      max: 12,
    },
    gender: {
      type: String,
      required: true,
    },
    day: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    comments: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
