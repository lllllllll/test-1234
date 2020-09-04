import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    code: String,
    title: String,
    description: String,
    photos: String,
    price: String,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    versionKey: false,
  },
);