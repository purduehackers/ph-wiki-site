import mongoose from 'mongoose'
import { PostDocument, IPostModel } from '@/types/Post'

const PostSchema = new mongoose.Schema<PostDocument, IPostModel>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    content: { type: String, required: true },
    authors: [
      {
        login: { type: String, required: true },
        avatar_url: { type: String, required: true },
        html_url: { type: String, required: true },
      },
    ],
    contributors: [
      {
        login: { type: String, required: true },
        avatar_url: { type: String, required: true },
        html_url: { type: String, required: true },
      },
    ],
    tags: { type: [String], required: true },
    archived: { type: Boolean, required: true },
    lastUpdated: { type: Date, required: true },
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
