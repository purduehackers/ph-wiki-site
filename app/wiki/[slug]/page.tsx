import Link from 'next/link'

import Authors from '@/app/components/posts/authors/Authors'
import CompiledMdx from '@/app/components/posts/mdx/CompiledMdx'
import { getMdxComponents } from '@/app/components/posts/mdx/MdxComponent'
import TableOfContent from '@/app/components/posts/page-table-of-content/TableOfContent'
import Tags from '@/app/components/posts/tags/Tags'
import { PostRepo } from '@/db/repo/PostRepo'
import { PostDocument } from '@/types/Post'
import { getHeadings } from '@/utils/getheadings'
import { headingNode } from '@/utils/getheadings'

import styles from './styles.module.css'

interface WikiPageProps {
  params: {
    slug: string
  }
}

interface postData {
  post: PostDocument
  headings: headingNode[]
}

const getPost = async (slug: string) => {
  const post = await PostRepo.findBySlug(slug)
  const headingsRoot = await getHeadings(post.content)
  const headings = headingsRoot.children
  const postData: postData = {
    post,
    headings,
  }
  return postData
}

const WikiPage = async ({ params }: WikiPageProps) => {
  const postDataPromise = getPost(params.slug)
  const [postData] = await Promise.all([postDataPromise])

  return (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        <div className={styles.lastUpdated}>
          Last Updated: {postData.post.lastUpdated.toDateString()} [
          <Link className={styles.edit} href={postData.post.url}>
            edit
          </Link>
          ]
        </div>
        <h1 className={styles.title}>{postData.post.name}</h1>
        <Authors users={postData.post.authors} />
        <Tags tags={postData.post.tags} />
        <hr className={styles.divider} />
        <div className={styles.mdxWrapper}>
          <CompiledMdx
            source={postData.post.content}
            components={getMdxComponents()}
          />
        </div>
      </div>
      <TableOfContent headings={postData.headings} />
    </div>
  )
}

export default WikiPage
