import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema(
  {
    userCode: String,
    productCode: String,
    description: String,
    isActive: Boolean,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    versionKey: false,
  },
);