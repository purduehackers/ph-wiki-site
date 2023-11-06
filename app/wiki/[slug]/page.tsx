import { MDXRemote } from 'next-mdx-remote/rsc'

import { MdxComponents } from '@/app/component/wiki/MdxComponenet'
import { PostRepo } from '@/db/repo/PostRepo'

interface WikiPageProps {
  params: {
    slug: string
  }
}

const getPost = async (id: string) => {
  const post = await PostRepo.findById(id)
  return post?.content || 'fake content'
}

const WikiPage = async ({ params }: WikiPageProps) => {
  const postMdxData = getPost(params.slug)
  const [postMdx] = await Promise.all([postMdxData])
  return <MDXRemote source={postMdx} components={MdxComponents} />
}

export default WikiPage
