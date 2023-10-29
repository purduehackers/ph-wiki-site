import mongoose from 'mongoose'
const Schema = mongoose.Schema

const postModel = () => {
  const schema = new Schema(
    {
      author: { type: String, required: true },
      content: { type: String, required: true },
      title: { type: String, required: true },
    },
    {
      timestamps: true,
      collection: 'wiki',
    }
  )

  return mongoose.models.Post || mongoose.model('Post', schema)
}

export default postModel
