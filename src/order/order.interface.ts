import { Document } from 'mongoose';

export interface Order extends Document {
  _id: string;
  title: string;
  description: string;
  photos: string;
  price: boolean;
}

export interface Orders {
  order: Order[];
}