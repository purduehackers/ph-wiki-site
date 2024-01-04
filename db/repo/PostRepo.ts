import { PostDocument } from '@/types/Post'
import { db } from '../db'
import { notFound } from 'next/navigation'

const Post = db.Post

const findById = async (id: string) => {
  const post = await Post.findById(id).exec()
  return post
}

const findBySlug = async (slug: string) => {
  const postData = await Post.findOne({ slug: slug })
  if (!postData) {
    notFound()
  }
  const post = postData.toObject() as PostDocument
  return post
}

const findByTag = async (tag: string) => {
  const postsData = await Post.find({ tags: tag })
  if (!postsData) {
    notFound()
  }

  const posts: PostDocument[] = []
  for (const postData of postsData) {
    posts.push(postData.toObject())
  }
  return posts
}

export const PostRepo = {
  findById,
  findBySlug,
  findByTag,
}
