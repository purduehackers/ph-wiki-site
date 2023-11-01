import { MDXRemote } from 'next-mdx-remote/rsc'

import { MdxComponents } from '@/app/component/wiki/MdxComponenet'
import { postRepo } from '@/db/repo/post'

interface PropsI {
  params: {
    slug: string
  }
}

const getPost = async (id: string) => {
  const post = await postRepo.findById(id)
  return post.content
}

const WikiPage = async ({ params }: PropsI) => {
  const postMdxData = getPost(params.slug)
  const [postMdx] = await Promise.all([postMdxData])
  return <MDXRemote source={postMdx} components={MdxComponents} />
}

export default WikiPage
