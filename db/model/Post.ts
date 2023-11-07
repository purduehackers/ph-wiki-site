import mongoose, { Model, Document } from 'mongoose'

export interface Post {
  name: string
  url: string
  content: string
}
export interface PostDocument extends Post, Document {}
export interface PostModel extends Model<PostDocument> {}

const PostSchema = new mongoose.Schema<PostDocument, PostModel>(
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
    mongoose.model<PostDocument, PostModel>('Post', PostSchema)
  )
}
