import { Document, Model } from 'mongoose'
import mongoose from 'mongoose'
import { PostDocument } from './Post'
import { PostSchema } from './Post'

export interface Path {
  name: string
  posts: PostDocument[]
  children: Path[]
}
export interface PathDocument extends Path, Document {}
export interface PathModel extends Model<PathDocument> {}

const PathSchema = new mongoose.Schema<PathDocument, PathModel>(
  {
    name: { type: String, required: true },
    posts: { type: [PostSchema], require: false },
  },
  {
    timestamps: true,
    collection: 'paths',
  }
)

PathSchema.add({
  children: { type: [PathSchema], required: true },
})

export { PathSchema }
export const createPathModel = () => {
  return mongoose.models.Path || mongoose.model('Path', PathSchema)
}
