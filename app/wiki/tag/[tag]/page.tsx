import Link from 'next/link'

import { PostRepo } from '@/db/repo/PostRepo'
import { Post } from '@/types/Post'

import styles from './styles.module.css'

interface TagPageProps {
  params: {
    tag: string
  }
}

const getPosts = async (tag: string) => {
  const posts = await PostRepo.findByTag(tag)
  return posts
}

const TagPage = async ({ params }: TagPageProps) => {
  const postsMdxData = getPosts(params.tag)
  const [postsMdx] = await Promise.all([postsMdxData])
  return (
    <div>
      <h1 className={styles.title}>Posts with tag &apos;{params.tag}&apos;</h1>
      {postsMdx.map((postMdx: Post) => {
        if (!postMdx.archived) {
          return (
            <div key={postMdx.slug}>
              <Link href={'/wiki/' + postMdx.slug}>{postMdx.name}</Link>
            </div>
          )
        }
      })}
    </div>
  )
}

export default TagPage
