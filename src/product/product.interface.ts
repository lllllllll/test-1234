import { Document } from 'mongoose';

export interface Product extends Document {
  _id: string;
  code: string;
  title: string;
  description: string;
  photos: string;
  price: string;
}

export interface Products {
  products: Product[];
}