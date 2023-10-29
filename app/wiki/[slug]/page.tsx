import { MDXRemote } from 'next-mdx-remote/rsc'

import { MdxComponents } from '@/app/component/wiki/MdxComponenet'
import PostI from '@/interfaces/post'

interface PropsI {
  params: {
    slug: string
  }
}

const getPost = async (id: string) => {
  const appURI = process.env.APP_URI
  const post = await fetch(`${appURI}/api/post/${id}`)
  if (post.ok) {
    const postData: PostI = await post.json()
    return postData.content
  }
  return ''
}

const WikiPage = async ({ params }: PropsI) => {
  const postMdxData = getPost(params.slug)
  const [postMdx] = await Promise.all([postMdxData])
  return <MDXRemote source={postMdx} components={MdxComponents} />
}

export default WikiPage
