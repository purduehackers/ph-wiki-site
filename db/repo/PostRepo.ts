import { db } from "../db";

const Post = db.Post;

const findById = async (id: string) => {
  const post = await Post.findById(id).exec();
  return post;
};

const findBySlug = async (slug: string) => {
  const post = await Post.find({ slug: slug }).exec();
  return post;
};

export const PostRepo = {
  findById,
  findBySlug,
};
