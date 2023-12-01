import { PostDocument } from '@/types/Post'
import { db } from '../db'

const Post = db.Post

const findById = async (id: string) => {
  const post = await Post.findById(id).exec()
  return post
}

const findBySlug = async (slug: string) => {
  const postData = await Post.findOne({ slug: slug })
  // TODO: error handling 404
  const post = postData.toObject() as PostDocument
  return post
}

export const PostRepo = {
  findById,
  findBySlug,
}
