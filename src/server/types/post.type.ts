import { Document } from "mongoose";

export interface IPost extends IPostInput, Document {
  updateAt: Date;
  createdAt: Date;
}
