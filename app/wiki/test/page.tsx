import Link from 'next/link'

import Authors from '@/app/components/posts/authors/Authors'
import CompiledMdx from '@/app/components/posts/mdx/CompiledMdx'
import { getMdxComponents } from '@/app/components/posts/mdx/MdxComponent'
import Tags from '@/app/components/posts/tags/Tags'
import { test_blog } from '@/app/components/test/test'
import { getHeadings } from '@/utils/getheadings'

import styles from './styles.module.css'

const getPost = async () => {
  const post = {
    lastUpdated: new Date(),
    url: '/',
    name: 'test title',
    authors: [
      {
        login: 'chi-wei-lien',
        avatar_url: 'https://avatars.githubusercontent.com/u/89671525?v=4',
        html_url: 'https://github.com/chi-wei-lien',
      },
    ],
    tags: ['test'],
    content: test_blog,
  }
  return post
}

const WikiPage = async () => {
  const postMdxData = getPost()
  const [postMdx] = await Promise.all([postMdxData])
  const headings = await getHeadings(test_blog)

  return (
    <div>
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
        <CompiledMdx source={postMdx.content} components={getMdxComponents()} />
      </div>
    </div>
  )
}

export default WikiPage
