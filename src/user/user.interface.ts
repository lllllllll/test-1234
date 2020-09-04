import { Document } from 'mongoose';

export interface User extends Document {
  _id: string;
  fullname: string;
  username: string;
  password: string;
  address: string;
}

export interface Users {
  users: User[];
}