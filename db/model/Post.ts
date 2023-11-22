import mongoose from 'mongoose'
import { PostDocument, IPostModel } from '@/types/Post'

const PostSchema = new mongoose.Schema<PostDocument, IPostModel>(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'posts',
  }
)

export { PostSchema }
export const createPostModel = () => {
  return (
    mongoose.models.Post ||
    mongoose.model<PostDocument, IPostModel>('Post', PostSchema)
  )
}
