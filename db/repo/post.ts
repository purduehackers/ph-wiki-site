import { db } from '../db'
import menuItemI from '@/interfaces/menuItem'

const Post = db.Post

const getAllMenuItems = async () => {
  const posts = await Post.find()
  const menu: menuItemI[] = []
  for (const post of posts) {
    menu.push({ id: post._id, title: post.title })
  }
  return menu
}

const findById = async (id: string) => {
  const post = await Post.findById(id).exec()
  return post
}

export const postRepo = {
  getAllMenuItems,
  findById,
}
