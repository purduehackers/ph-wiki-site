import Link from 'next/link'

import { Post } from '@/types/Post'

import Authors from '../posts/authors/Authors'
import styles from './styles.module.css'

interface TagPostProps {
  post: Post
}

const TagPost = ({ post }: TagPostProps) => {
  return (
    <div className={styles.postCard}>
      <h1>{post.name}</h1>
      <Authors users={post.authors} />
      <Link href={'/wiki/' + post.slug}>
        <div className={styles.readmore}>Read More</div>
      </Link>
    </div>
  )
}

export default TagPost
