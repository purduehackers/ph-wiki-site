import { MDXRemote } from 'next-mdx-remote/rsc'

import PostI from '@/interfaces/post'

interface PropsI {
  params: {
    slug: string
  }
}

const getPost = async (id: string) => {
  const post = await fetch(`http://localhost:3000/api/post/${id}`)
  const postData: PostI = await post.json()
  const postMdxData = postData.content
  return postMdxData
}

const WikiPage = async ({ params }: PropsI) => {
  const postMdxData = await getPost(params.slug)
  return <MDXRemote source={postMdxData} />
}

export default WikiPage
