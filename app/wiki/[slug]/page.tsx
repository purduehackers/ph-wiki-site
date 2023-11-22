import { MDXRemote } from 'next-mdx-remote/rsc'

import Authors from '@/app/components/wiki/authors/Authors'
import { MdxComponents } from '@/app/components/wiki/MdxComponenet'
import Tags from '@/app/components/wiki/tags/Tags'
import { PostRepo } from '@/db/repo/PostRepo'

import styles from './styles.module.css'

interface WikiPageProps {
  params: {
    slug: string
  }
}

const getPost = async (slug: string) => {
  const post = await PostRepo.findBySlug(slug)
  return post
}

const WikiPage = async ({ params }: WikiPageProps) => {
  const postMdxData = getPost(params.slug)
  const [postMdx] = await Promise.all([postMdxData])

  return (
    <div>
      <div className={styles.lastUpdated}>
        Last Updated: {postMdx.lastUpdated.toDateString()}
      </div>
      <h1># {postMdx.name}</h1>
      <Authors users={postMdx.authors} />
      <Tags tags={postMdx.tags} />
      <hr />
      <MDXRemote source={postMdx.content} components={MdxComponents} />
    </div>
  )
}

export default WikiPage
