import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    fullname: String,
    username: String,
    password: String,
    address: String,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    versionKey: false,
  },
);