import { Document, Model } from 'mongoose'

import GithubUser from './GithubUser'

export interface Post {
  name: string
  slug: string
  url: string
  authors: GithubUser[]
  contributors: GithubUser[]
  tags: string[]
  archived: boolean
  content: string
  lastUpdated: Date
}

export interface PostDocument extends Post, Document {}

export interface IPostModel extends Model<PostDocument> {}
