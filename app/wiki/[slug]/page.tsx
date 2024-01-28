import Link from 'next/link'

import Authors from '@/app/components/posts/authors/Authors'
import CompiledMdx from '@/app/components/posts/mdx/CompiledMdx'
import { MdxComponents } from '@/app/components/posts/mdx/MdxComponenet'
import Tags from '@/app/components/posts/tags/Tags'
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
    <div className={styles.postContainer}>
      <div className={styles.lastUpdated}>
        Last Updated: {postMdx.lastUpdated.toDateString()} [
        <Link className={styles.edit} href={postMdx.url}>
          edit
        </Link>
        ]
      </div>
      <h1 className={styles.title}>{postMdx.name}</h1>
      <Authors users={postMdx.authors} />
      <Tags tags={postMdx.tags} />
      <hr className={styles.divider} />
      <div className={styles.mdxWrapper}>
        <CompiledMdx source={postMdx.content} components={MdxComponents} />
      </div>
    </div>
  )
}

export default WikiPage
