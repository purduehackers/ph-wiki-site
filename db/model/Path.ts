import { Document, Model } from "mongoose";
import mongoose from "mongoose";
import { PostDocument } from "./Post";
import { PostSchema } from "./Post";

export interface Path {
  name: string;
  slug: string;
  posts: PostDocument[];
}
export interface SinglePathDocument extends Path, Document {}
export interface PathDocument extends SinglePathDocument {
  children: PathDocument[];
}
export interface IPathModel extends Model<PathDocument> {}

const PathSchema = new mongoose.Schema<PathDocument, IPathModel>(
  {
    name: { type: String, required: true },
    posts: { type: [PostSchema], require: false },
  },
  {
    timestamps: true,
    collection: "paths",
  },
);

PathSchema.add({
  children: { type: [PathSchema], required: true },
});

export { PathSchema };
export const createPathModel = () => {
  return mongoose.models.Path || mongoose.model("Path", PathSchema);
};
