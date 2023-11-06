import { db } from '../db'

const Post = db.Post

const findById = async (id: string) => {
  const post = await Post.findById(id).exec()
  return post
}

export const PostRepo = {
  findById,
}
