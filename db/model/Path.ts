import mongoose from 'mongoose'
import { PostSchema } from './Post'
import { PathDocument, IPathModel } from '@/types/Path'

const PathSchema = new mongoose.Schema<PathDocument, IPathModel>(
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
