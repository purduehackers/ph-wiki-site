import getConfig from 'next/config'
import mongoose from 'mongoose'

import { createPostModel } from './model/Post'
import { createPathModel } from './model/Path'

const { serverRuntimeConfig } = getConfig()

mongoose
  .connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB")
  })
mongoose.Promise = global.Promise

export const db = {
  Post: createPostModel(),
  Path: createPathModel(),
}
