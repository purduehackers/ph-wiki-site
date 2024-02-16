import getConfig from 'next/config'
import mongoose from 'mongoose'

import { createPostModel } from './model/Post'
import { createPathModel } from './model/Path'

const { serverRuntimeConfig } = getConfig()

if (process.env.NODE_ENV == 'production') {
  mongoose
    .connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString)
    .then(() => {
      // console.log('Connected to MongoDB')
    })
    .catch(() => {
      console.log("Couldn't connect to MongoDB")
    })
} else {
  mongoose
    .connect(
      `mongodb://127.0.0.1:27017/${process.env.DEV_DB_NAME}` ||
        serverRuntimeConfig.connectionString
    )
    .then(() => {
      // console.log('Connected to MongoDB')
    })
    .catch(() => {
      console.log("Couldn't connect to MongoDB")
    })
}

mongoose.Promise = global.Promise

export const db = {
  Post: createPostModel(),
  Path: createPathModel(),
}
